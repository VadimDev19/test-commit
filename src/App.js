import logo from "./logo.svg";
import "./App.css";

function App() {
  //   const oldFn = () => {
  //     let userAgent = navigator.userAgent;
  //     let browser;
  //     if (userAgent.match(/(edg(?=\/))\/?\s*(\d+)/i)) {
  //       // console.log("edge", userAgent.match(/(edg(?=\/))\/?\s*(\d+)/i));
  //       browser = "edge";
  //     } else if (userAgent.match(/firefox|fxios/i)) {
  //       browser = "firefox";
  //     } else if (userAgent.match(/opr\//i)) {
  //       browser = "opera";
  //     } else if (userAgent.match(/chrome|chromium|crios/i)) {
  //       browser = "chrome";
  //     } else if (userAgent.match(/safari/i)) {
  //       browser = "safari";
  //     } else {
  //       alert("Other browser");
  //     }
  // }

  // console.log("navigator", navigator);
  // console.log("boolean", navigator.userAgent.match(/edg/i));

  // navigator.browserSpecs = (function () {
  //   let ua = navigator.userAgent,
  //     tem,
  //     M =
  //       ua.match(/(chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
  //       [];
  //   if (/trident/i.test(M[1])) {
  //     tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
  //     return { name: "IE", version: tem[1] || "" };
  //   }
  //   if (M[1] === "Chrome") {
  //     tem = ua.match(/\b(OPR)\/(\d+)/) ?? ua.match(/(edg(?=\/))\/?\s*(\d+)/i);

  //     if (tem) {
  //       tem[1] = tem[1] === "OPR" ? "Opera" : "Edge";
  //       return { name: tem[1], version: tem[2] };
  //     }
  //   }
  //   // M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  //   if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  //   return { name: M[0], version: M[1] };
  // })();

  // console.log(navigator.browserSpecs);

  const getBrowser = () => {
    const ua = navigator.userAgent;
    let tem = null;
    const M =
      ua.match(/(chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    console.log("M", M);
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      return { name: "IE", version: tem[1] || "" };
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR)\/(\d+)/) ?? ua.match(/(edg(?=\/))\/?\s*(\d+)/i);

      if (tem) {
        return { name: tem[1] === "OPR" ? "Opera" : "Edge", version: tem[2] };
      }
    }

    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return { name: M[1], version: M[2] };
  };
  const browser = getBrowser();
  console.log("browser", browser);

  const contains = (str, sub) => {
    return str.indexOf(sub) > -1;
  };

  const getOS = () => {
    const ua = navigator.userAgent.toLowerCase();
    let up = navigator.platform,
      isWin = up === "Win32" || up === "Windows",
      isMac =
        up === "Mac68K" ||
        up === "MacPPC" ||
        up === "Macintosh" ||
        up === "MacIntel",
      isUnix = up === "X11" && !isWin && !isMac,
      isLinux = contains(up, "Linux") && contains(ua, "linux"),
      os = "";
    if (isLinux) {
      os = contains(ua, "android") ? "android" : "linux";
    } else if (isMac) {
      os = contains(ua, "iphone")
        ? "iphone"
        : contains(ua, "ipad")
        ? "ipad"
        : "mac";
    } else if (isUnix) {
      os = "unix";
    } else if (isWin) {
      var winkey = {
        win2000: "windows nt 5.0",
        winXP: "windows nt 5.1",
        win2003: "windows nt 5.2",
        winVista: "window nt 6.0",
        win7: "windows nt 6.1",
        win8: "windows nt 6.2",
        "win8.1": "windows nt 6.3",
        win10: "windows nt 10.0",
      };
      for (var key in winkey) {
        if (contains(ua, winkey[key])) {
          os = key;
          break;
        }
      }
    }
    return os;
  };

  const system = getOS();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browser: {browser.name}, version: {browser.version}
          <br />
          OS: {system}
        </a>
      </header>
    </div>
  );
}

export default App;
