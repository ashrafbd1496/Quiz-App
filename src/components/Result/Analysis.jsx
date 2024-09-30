import classes from './Analysis.module.css'
import Qclasses from '../Quiz/Answers.module.css'

export default function Analysis() {
  return (
    <div>
      <div className={classes.analysis}>
          <h1>প্রশ্ন উত্তর বিশ্লেষণ</h1>
          <h4>আপনি ১০ টি প্রশ্নের মধ্যে ৫ টির সঠিক উত্তর দিয়েছেন </h4>

          <div className={classes.question}>
            <div className={classes.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <div className={Qclasses.answers}>
              {/* <!-- Option 1 --> */}
              <label className={Qclasses.answer} htmlFor="option1"> A New Hope 1 </label>

              {/* <!-- Option 2 --> */}
              <label className={Qclasses.answer} htmlFor="option2"> A New Hope 1 </label>

              {/* <!-- Option 3 --> */}
              <label className={Qclasses.answer} htmlFor="option3"> A New Hope 1 </label>

              {/* <!-- Option 4 --> */}
              <label className={`${Qclasses.answer} ${Qclasses.wrong}`} htmlFor="option4"> <span>A New Hope 1</span><span>ভুল উত্তর </span> </label>

              {/* <!-- Option 5 --> */}
              <label className={Qclasses.answer} htmlFor="option5"> A New Hope 1 </label>

              {/* <!-- Option 6 --> */}
              <label className={Qclasses.answer} htmlFor="option6"> A New Hope 1 </label>

              {/* <!-- Option 7 --> */}
              <label className={`${Qclasses.answer} ${Qclasses.correct}`}htmlFor="option7"> <span>A New Hope 1</span><span>সঠিক উত্তর </span> </label>

              {/* <!-- Option 8--> */}
              <label className={Qclasses.answer} htmlFor="option8"> A New Hope 1 </label>

              {/* <!-- Option 9 --> */}
              <label className={Qclasses.answer} htmlFor="option9"> A New Hope 1 </label>

              {/* <!-- Option 10 --> */}
              <label className={Qclasses.answer} htmlFor="option10"> A New Hope 1 </label>
            </div>
          </div>

          <div className={classes.question}>
            <div className={classes.qtitle}>
              <span className="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Sumit?
            </div>
            <div className={Qclasses.answers}>
              {/* <!-- Option 1 --> */}
              <label className={Qclasses.answer} htmlFor="option1"> A New Hope 1 </label>

              {/* <!-- Option 2 --> */}
              <label className={Qclasses.answer} htmlFor="option2"> A New Hope 1 </label>

              {/* <!-- Option 3 --> */}
              <label className={Qclasses.answer} htmlFor="option3"> A New Hope 1 </label>

              {/* <!-- Option 4 --> */}
              <label className={`${Qclasses.answer} ${Qclasses.wrong}`} htmlFor="option4"> <span>A New Hope 1</span><span>ভুল উত্তর </span> </label>

              {/* <!-- Option 5 --> */}
              <label className={Qclasses.answer} htmlFor="option5"> A New Hope 1 </label>

              {/* <!-- Option 6 --> */}
              <label className={Qclasses.answer} htmlFor="option6"> A New Hope 1 </label>

              {/* <!-- Option 7 --> */}
              <label className={`${Qclasses.answer} ${Qclasses.correct}`} htmlFor="option7"> <span>A New Hope 1</span><span>সঠিক উত্তর </span> </label>

              {/* <!-- Option 8--> */}
              <label className={Qclasses.answer} htmlFor="option8"> A New Hope 1 </label>

              {/* <!-- Option 9 --> */}
              <label className={Qclasses.answer} htmlFor="option9"> A New Hope 1 </label>

              {/* <!-- Option 10 --> */}
              <label className={Qclasses.answer} htmlFor="option10"> A New Hope 1 </label>
            </div>
          </div>
        </div>
    </div>
  )
}
