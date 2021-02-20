  const trim = (str) => {
      let strArr = str.split('');
      strArr.pop(); //from end

      strArr.shift(); //from beginning

      return strArr.join('');

  }

  console.log(trim("great"));