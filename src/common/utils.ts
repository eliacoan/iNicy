class Utils {
    static rnd(value: number = 100): number {
        return Math.floor(Math.random() * value)
    }
    static rndRange(min: number = 0, max: number = 0) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static chance(threshold: number = 50): boolean {
        return this.rnd() < threshold
    }
    static rollD4() : number {
        return this.rndRange(1,4)
    }
    static rollD6() : number {
        return this.rndRange(1,6)
    }
    static rollD8() : number {
        return this.rndRange(1,8)
    }
    static rollD10() : number {
        return this.rndRange(1,10)
    }
    static rollD20() : number {
        return this.rndRange(1,20)
    }

    static log(text: string) {
        console.log('INF    ' + text)
    }
    static err(text: string) {
        console.log('ERR    ' + text)
    }
    static wrn(text: string) {
        console.log('WRN    ' + text)
    }

    static cookieSet(key: string, value: string, expiration: number) {
        var d = new Date();
        d.setTime(d.getTime() + (expiration * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
    static cookieGet(key: string) : string {
        var name = key + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      static cookieCheck(key: string) : boolean {
        var c = this.cookieGet(key);
        if (c != "") {
          return true
        } else {
          return false
        }
      }

      static lpad(t: number, w:number = 3) : string {
        let zeroes = new Array(w + 1).join("0");
        return (zeroes + t).slice(-w);
      }
}