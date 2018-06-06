const gulp = require("gulp");
const config = require("./env.paths.json");
const env = process.env.NODE_ENV;

// плагины галпа отдельно подключать не нужно,
// используем в пайпе как $gp.имяПлагина (без приставки gulp-)
const $gp = require("gulp-load-plugins")();

const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const $webpack = require("webpack-stream");
const webpack = require("webpack");
const del = require("del");

// стили
gulp.task("styles", () => {
  return gulp
    .src(`${config.SRC_DIR}/styles/main.scss`)
    .pipe($gp.sourcemaps.init())
    .pipe($gp.plumber())
    .pipe($gp.postcss(require("./postcss.config")))
    .pipe($gp.rename("main.min.css"))
    .pipe($gp.if(env === "development", $gp.sourcemaps.write()))
    .pipe(gulp.dest(`${config.DIST_DIR}`))
    .pipe(reload({ stream: true }));
});

// переносим шрифты
gulp.task("fonts", () => {
  return gulp
    .src(`${config.SRC_DIR}/fonts/**`)
    .pipe(gulp.dest(`${config.DIST_DIR}/assets/fonts/`));
});

// очистка
gulp.task("clean", () => {
  return del(config.ROOT_PATH);
});

// собираем скрипты webpack
gulp.task("scripts", () => {
  return gulp
    .src(`${config.SRC_DIR}/scripts/*.js`)
    .pipe($gp.plumber())
    .pipe($webpack(require("./webpack.mpa.config"), webpack))
    .pipe(gulp.dest(`${config.DIST_DIR}`))
    .pipe(reload({ stream: true }));
});

//рендерим странички
gulp.task("pug", () => {
  return gulp
    .src(`${config.VIEWS_DIR}/pages/*.pug`)
    .pipe($gp.plumber())
    .pipe($gp.pug())
    .pipe(gulp.dest(`${config.DIST_DIR}`))
    .pipe(reload({ stream: true }));
});

// dev сервер + livereload (встроенный)
gulp.task("server", () => {
  browserSync.init({
    server: {
      baseDir: `${config.DIST_DIR}`
    },
    open: false
  });
});

// спрайт иконок
gulp.task("svg", done => {
  return gulp
    .src(`${config.SRC_DIR}/images/icons/*.svg`)
    .pipe(
      $gp.svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      $gp.cheerio({
        run($) {
          $("[fill], [stroke], [style], [width], [height]")
            .removeAttr("fill")
            .removeAttr("stroke")
            .removeAttr("style")
            .removeAttr("width")
            .removeAttr("height");
        },
        parserOptions: { xmlMode: true }
      })
    )
    .pipe($gp.replace("&gt;", ">"))
    .pipe(
      $gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
          }
        }
      })
    )
    .pipe(gulp.dest(`${config.DIST_DIR}/assets/images/icons`));
});

// просто переносим картинки
gulp.task("images", () => {
  return gulp
    .src([
      `${config.SRC_DIR}/images/**/*.*`,
      `!${config.SRC_DIR}/images/icons/*.*`
    ])
    .pipe($gp.if(env === "production", $gp.imagemin()))
    .pipe(gulp.dest(`${config.DIST_DIR}/assets/images/`));
});

// галповский вотчер
gulp.task("watch", () => {
  gulp.watch(`${config.SRC_DIR}/styles/**/*.scss`, gulp.series("styles"));
  gulp.watch(`${config.SRC_DIR}/images/**/*.*`, gulp.series("images"));
  gulp.watch(`${config.SRC_DIR}/scripts/**/*.js`, gulp.series("scripts"));
  gulp.watch(`${config.SRC_DIR}/fonts/*`, gulp.series("fonts"));
  gulp.watch(`${config.VIEWS_DIR}/**/*.pug`, gulp.series("pug"));
});

// GULP:DEV
gulp.task(
  "default",
  gulp.series(
    "clean",
    "svg",
    gulp.parallel("styles", "pug", "images", "fonts", "scripts"),
    gulp.parallel("watch", "server")
  )
);

// GULP:build
gulp.task(
  "build",
  gulp.series(
    "clean",
    "svg",
    gulp.parallel("styles", "pug", "images", "fonts", "scripts")
  )
);
