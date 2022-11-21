import React, { Component } from "react";
import "./Something.scss";

export default class Something extends Component {
  state = {
    isRunning: false,
    hh: 0,
    mm: 0,
    ss: 0,
    ms: 0,
  };

  timerID = 0;

  clickHandler = () => {
    let { isRunning } = this.state;
    if (isRunning) {
      // Running => Stop
      clearInterval(this.timerID);
    } else {
      // Stop => Running
      let { hh, mm, ss, ms } = this.state;

      this.timerID = setInterval(() => {
        ms++;
        if (ms >= 100) {
          ss++;
          ms = 0;
        }
        if (ss >= 60) {
          mm++;
          ss = 0;
        }
        if (mm >= 60) {
          hh++;
          mm = 0;
        }
        this.setState({ hh, mm, ss, ms });
      }, 10);
    }
    this.setState({ isRunning: !isRunning });
  };

  reset = () => {
    this.setState({ hh: 0, mm: 0, ss: 0, ms: 0, isRunning: false });
    clearInterval(this.timerID);
  };

  // Current = () => {
  //   let child = document.createElement("div");
  //   child.classList.add = "Something_row_col_child";
  //   document.getElementById("current").appendChild(child);

  //   // document.querySelector(".some").innerHTML = this.timerID;
  //   console.log(this.timerID);
  //   // clearInterval(this.timerID);
  // };

  // 1 => 01
  format(num) {
    return (num + "").length === 1 ? "0" + num : num + "";
  }
  render() {
    return (
      <div className="Something">
        <div className="Something_row">
          <div className="Something_row_col">
            <div className="Something_row_col_child">
              <div className="Something_row_col_child_item">
                {this.format(this.state.hh)}
              </div>
              :
              <div className="Something_row_col_child_item">
                {this.format(this.state.mm)}
              </div>
              :
              <div className="Something_row_col_child_item">
                {this.format(this.state.ss)}
              </div>
              .
              <div className="Something_row_col_child_item">
                {this.format(this.state.ms)}
              </div>
            </div>
            <div className="Something_row_col_child">
              <div className="Something_row_col_child_item">hr</div>
              <div className="Something_row_col_child_item">min</div>
              <div className="Something_row_col_child_item">sec</div>
            </div>
          </div>
          <div className="Something_row_col">
            <div
              onClick={this.clickHandler}
              className="Something_row_col_child"
              id="play"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 3.70096C9.75 4.27831 9.75 5.72169 8.75 6.29904L2.75 9.76314C1.75 10.3405 0.5 9.6188 0.5 8.4641L0.500001 1.5359C0.500001 0.381198 1.75 -0.34049 2.75 0.23686L8.75 3.70096Z"
                  fill="#2B303B"
                />
              </svg>
            </div>
            {/* <div onClick={this.Current} className="Something_row_col_child">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.88 2.75V10.97V14.06V18.04V21.25C2.88 21.66 3.21 22 3.63 22C4.04 22 4.38 21.66 4.38 21.25V18.04V14.81H10.1C10.65 14.81 11.1 14.36 11.1 13.81V13.31V3.5V3C11.1 2.45 10.65 2 10.1 2H3.63C3.21 2 2.88 2.34 2.88 2.75Z"
                  fill="black"
                />
                <path
                  d="M17.52 11.33C17.2 11.05 17.02 10.7 17.02 10.33C17.02 9.96 17.2 9.61 17.52 9.33L20.53 6.75999C21.07 6.29999 21.26 5.61 21.02 4.97C20.76 4.26 20.06 3.8 19.24 3.8H13.6C13.05 3.8 12.6 4.25 12.6 4.8V5.3V15.36V15.86C12.6 16.41 13.05 16.86 13.6 16.86H19.24C20.06 16.86 20.76 16.4 21.02 15.69C21.09 15.51 21.12 15.32 21.12 15.13C21.12 14.67 20.92 14.23 20.53 13.9L17.52 11.33Z"
                  fill="black"
                />
              </svg>
            </div> */}
            <div onClick={this.reset} className="Something_row_col_child">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.70711 4.70711C8.09763 4.31658 8.09763 3.68342 7.70711 3.29289C7.31659 2.90237 6.68342 2.90237 6.2929 3.29289L2.29289 7.2929C2.10536 7.48043 2 7.73479 2 8C2 8.26522 2.10536 8.51957 2.29289 8.70711L6.2929 12.7071C6.68342 13.0976 7.31659 13.0976 7.70711 12.7071C8.09763 12.3166 8.09763 11.6834 7.70711 11.2929L5.41421 9H15C17.7614 9 20 11.2386 20 14C20 16.7614 17.7614 19 15 19H13.7879C13.2356 19 12.7879 19.4477 12.7879 20C12.7879 20.5523 13.2356 21 13.7879 21H15C18.866 21 22 17.866 22 14C22 10.134 18.866 7 15 7H5.41422L7.70711 4.70711Z"
                  fill="#262626"
                />
              </svg>
            </div>
          </div>
          <div className="Something_row_col" id="current"></div>
        </div>
      </div>
    );
  }
}
