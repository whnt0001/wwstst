let num = +prompt("Введите четырехзначное число");
        alert(mul(num));
 
        function mul(num) {
            if (num > 999 && num < 10000) {
                let s = num.toString();
                console.log (s[0]);
                console.log (s[1]);
                console.log (s[2]);
                console.log (s[3]);
            }
        }