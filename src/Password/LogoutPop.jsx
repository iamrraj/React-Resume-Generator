import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();
const LogoutPopup = () => {
  const [signoutTime, setSignoutTime] = useState(1800000);
  const [warningTime, setWarningTime] = useState(1500000);
  let warnTimeout;
  let logoutTimeout;

  const warn = () => {
    Swal.fire({
      title: "Your session in going to expire soon ",
      icon: "warning",
      html: "Session will expire <b>30</b> sec.",
      // text: "Session will expire in 30 sec",
      showConfirmButton: false,
      timer: 3000,
    });
  };
  const logout = () => {
    Swal.fire({
      title: "Logged out ",
      icon: "success",
      text: "You have been loged out",
      showConfirmButton: false,
      timer: 3000,
    });
    localStorage.removeItem("Name");
    cookies.remove("Token");
    localStorage.removeItem("Token");
    window.location.href = "/";
    window.location.reload();
  };

  //   const destroy = () => {
  //     Swal.fire({
  //       title: "Destroy ",
  //       type: "success",
  //       text: "Session destroy Successfully  !",
  //       showConfirmButton: false,
  //       timer: 3000,
  //     });
  //   };
  const setTimeouts = () => {
    warnTimeout = setTimeout(warn, warningTime);
    logoutTimeout = setTimeout(logout, signoutTime);
  };

  const clearTimeouts = () => {
    if (warnTimeout) clearTimeout(warnTimeout);
    if (logoutTimeout) clearTimeout(logoutTimeout);
  };

  function TrainingTime(totalSeconds) {
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${minutes} : ${seconds}`;
  }

  var count = -1;
  const deadTime = Math.floor(signoutTime / 1000);
  function beginTimer() {
    count++;

    if (count < deadTime) {
      var don = deadTime - count;
      var minutes = TrainingTime(don);
      document.getElementById("demo").innerHTML = ""; //minutes;
      setTimeout(beginTimer, 2000);
    } else {
      endTimer();
    }
  }

  function endTimer() {
    console.log("Time is finished");
  }

  useEffect(() => {
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
      "wheel",
      "keydown",
    ];

    beginTimer();

    const resetTimeout = () => {
      clearTimeouts();
      setTimeouts();
    };
    setSignoutTime();
    setWarningTime();

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeouts();
    return () => {
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
        clearTimeouts();
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h5 id="demo" className="text-white">
        {" "}
      </h5>
    </div>
  );
};
export default withRouter(LogoutPopup);
