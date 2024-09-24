import classes from './Answers.module.css'

export default function Answers() {
  return (
    <div>
       <div className={classes.answers}>
          {/* Option 1 */}
          <label className={classes.answer} htmlFor="option1">
            <input type="checkbox" id="option1" />
            A New Hope 1
          </label>

          {/* <!-- Option 2 --> */}
          <label className={classes.answer} htmlFor="option2">
            <input type="checkbox" id="option2" />
            A New Hope 1
          </label>

          {/* <!-- Option 3 --> */}
          <label className={classes.answer} htmlFor="option3">
            <input type="checkbox" id="option3" />
            A New Hope 1
          </label>

          {/* <!-- Option 4 --> */}
          <label className={`${classes.answer} ${classes.wrong}`} htmlFor="option4">
            <input type="checkbox" id="option4" />
            A New Hope 1
          </label>

          {/* <!-- Option 5 --> */}
          <label className={classes.answer} htmlFor="option5">
            <input type="checkbox" id="option5" />
            A New Hope 1
          </label>

          {/* <!-- Option 6 --> */}
          <label className={classes.answer} htmlFor="option6">
            <input type="checkbox" id="option6" />
            A New Hope 1
          </label>

          {/* <!-- Option 7 --> */}
          <label className={`${classes.answer} ${classes.correct}`}  htmlFor="option7">
            <input type="checkbox" id="option7" />
            A New Hope 1
          </label>

          {/* <!-- Option 8--> */}
          <label className={classes.answer} htmlFor="option8">
            <input type="checkbox" id="option8" />
            A New Hope 1
          </label>

          {/* Option 9*/}
          <label className={classes.answer} htmlFor="option9">
            <input type="checkbox" id="option9" />
            A New Hope 1
          </label>

        {/* Option 10 */}
          <label className={classes.answer} htmlFor="option10">
            <input type="checkbox" id="option10" />
            A New Hope 1
          </label>
        </div>
    </div>
  )
}
