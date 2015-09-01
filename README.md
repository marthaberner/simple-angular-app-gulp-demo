## Watch the overview video

Head over to [students.galvanize.com](https://students.galvanize.com/curriculums/6/learning_experiences/11) and find the `Asset Management` learning experience.
Watch the first video.

## SET UP

1. npm init to generate a `package.json` file

1. install gulp globally on your machine

```
npm install -g gulp
```
1. confirm

```
gulp 1.v
```
1. install gulp in app (dev dependencies only)

```
npm install --save-dev gulp
```
1. in your root directory `touch gulpfile.js` and add `var gulp = require('gulp');`

## Gulp Tasks

#### 1. Start with the `index.html`

This code tells gulp to go get all the code in `index.html` and copy it to a new `index.html` file in our `dist` directory. That directory doesn't yet exist, but gulp will make both the file and the directory for us.

```
gulp.task('html', function () {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist'))
})
```

Let's run this task by running `gulp html` from the command line. You should see a couple of lines of output. Now go to your file structure and confirm that there is a new directory `dist` with a copy of your `index.html` file.

Cool! Let's keep going.

#### 2. Concat all of your `js` files to a file named `all.js`

For this, we'll need to install another package.
  - `npm install --save-dev gulp-concat`

Require the new package in your `gulpfile.js`
  - `var concat = require('gulp-concat')`

Now, let's write a gulp task that grabs all of our `js` files and concatenates them into one file `all.js` and puts it in our `dist` directory. Remember, gulp will create the file for us.

```
gulp.task('scripts', function () {
  return gulp.src('src/js/*js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'))
})
```

Go the the command line and run the task. What do you think command is?

Go check out your new `all.js` file. Now, in our `index.html` we no longer need to include our scripts individually,
we can just to `all.js` and get the job done.

#### 3. Ok, let's go grab our CSS

Based on what you've seen so far, I think you got this one.

Write a gulp task that copies your `.css` file into your `dist` directory. Then run the task from the command line. Don't forget to update your `index.html` file to point to your new `app.css` file in the `dist` directory.

What if we had more than one `.css` file? Because of the `cascading` part of our css, there are times when it will be
important in what order you concatenate your `.css` files. You don't need that now, but know that it's a thing and you
will explore that later.

#### 4. Keeping up with file changes

We made a couple of changes in our `index.html` file. We need to let gulp know about that so everything stays in sync.

What do you think we need to do? What would be the simplest way you can think of? I'll wait :)

```
... waiting
```
Ok, that worked fine and was no biggie, right? But that could get old fast. Are we really going to have to tell gulp about
every little change to any file and go to the command line and run each of our tasks every time? Well, yes... and no.

It turns out, we can also write a gulp task that tells gulp to keep an eye out for changes and just go ahead and keep everything in sync.

Add another gulp task to your `gulpfile.js` called `watchout`:

```
gulp.task('watchout', function () {
  gulp.watch('src/js/*js', ['scripts'])
  gulp.watch('src/css/app.css', ['styles'])
  gulp.watch('src/index.html', ['html'])
})
```
Now, go run that task from the command line. Notice anything different about this task? It doesn't quit. Similar to the way `nodemon`
watches our app for changes and keeps our server up to date, a gulp watch task keeps an eye out for file changes and keeps our `dist`
files up to date. Sweet!

#### 5. One last step! Sort of ...

Let's write one more gulp task that tells gulp what to do whenever it first starts up. We can write a default task and pass it
an array of tasks.

```
gulp.task('default', ['html', 'scripts', 'styles', 'watchout'])
```

Now, from the command line we can just run `gulp` and since we have defined a default task, it knows just what to do. Try it out.
