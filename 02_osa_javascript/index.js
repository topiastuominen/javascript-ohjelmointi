


      //muuttujat_01
      //lisää muuttuja count ja aseta siihen arvo 0, sitten lisää siihen yksi lisää seuraavalla rivillä
      let count = 0;
      count = count + 1;
      console.log(count);

      //muuttujat_02
      // Määrittele muuttuja nimeltään ageLimit, jota ei voi uudelleen määrittää, ja anna sille arvoksi 18.
      const ageLimit = 18;
      console.log(ageLimit);

      //muuttujat_03
      // Määrittele kaksi muuttujaa: student ja name.
      // Anna muuttujalle name arvoksi "Mikko".
      // Kopioi arvo muuttujasta name muuttujaan student.
      // Tulosta student-muuttujan arvo konsoliin (tulostus on "Mikko").
      let student = null;
      let studentName = "Mikko";
      student = studentName;
      console.log(student);

      /*
    - Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
    - Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
    - Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
    - Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
    - Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

    - Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

    - Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
    */

      let age = 34;
      let personName = "Topias";
      let isStudent = true;
      let hobbies = ["Brazilian jiu-jutsu", "coding", "boxing"];
      let info = {
        schoolName: "Helsinki Business College",
        grade: 5,
      };

      console.log(age);
      console.log(name);
      console.log(isStudent);
      console.log(hobbies);
      console.log(info);

      console.log(typeof age);
      console.log(typeof name);
      console.log(typeof isStudent);
      console.log(typeof hobbies);
      console.log(typeof info);

      // numerot_01
      // Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
      // Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.

      function convertNumberToString(number) {
        return number + "";
      }

      function convertStringToNumber(string) {
        return string * 1;
      }
      console.log(convertNumberToString(42));
      console.log(convertNumberToString(97));
      console.log(convertNumberToString(11));

      console.log(convertStringToNumber("42"));
      console.log(convertStringToNumber("97"));
      console.log(convertStringToNumber("11"));

      // numerot_02
      // Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
      // Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
      // Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.

      function fahrenheitToCelsius(fahrenheit = 0) {
        return ((fahrenheit - 32) * 5) / 9;
      }

      // Esimerkki - älä muokkaa
      console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"

      // numerot_03
      /*
      - Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
      - Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

      - Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
      - Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
      - Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

      - Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
      - Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
      */

      let num1 = 3.14;
      let num2 = 5.67;

      let roundedNum1 = Math.round(num1);
      let roundedNum2 = Math.round(num2);
      let sqrtNum1 = Math.sqrt(roundedNum1);
      let maxNum = Math.max(roundedNum1, roundedNum2);

      console.log(roundedNum1);
      console.log(roundedNum2);
      console.log(sqrtNum1);
      console.log(maxNum);

      console.log(typeof roundedNum1);
      console.log(typeof roundedNum2);
      console.log(typeof sqrtNum1);
      console.log(typeof maxNum);

      // numerot_04
      /**Tehtävä: Jakolasku
       * Kuvitellaan, että olet matematiikan opettaja, ja haluat laatia yksinkertaisen tehtävän oppilaillesi. Tehtäväsi on luoda ohjelma, joka laskee kahden luvun jakolaskun ja tulostaa tuloksen.
       * - Luo kaksi muuttujaa, ja anna niille arvot.
       * - Laske näiden kahden numeron jakolaskun tulos ja tallenna se uuteen muuttujaan
       * - Tulosta vastaus konsoliin.
       */

      let num3 = 8;
      let num4 = 4;
      let result = num3 / num4;
      console.log(result);

      // numerot_05
      /** Tehtävä: Ostoskori
       * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
       * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
       * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
       * - Tulosta yhteishinta konsoliin.
       */

      let product1 = 10;
      let product2 = 20;
      let product3 = 30;
      let totalPrice = product1 + product2 + product3;
      console.log(totalPrice);

      //operaattorit_01

      /* 
      - Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
      - Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

      - Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

      - Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
      */

      let a = 10;
      let b = 5;

      let sum = a + b;
      let difference = a - b;
      let multi = a * b;
      let divide = a / b;
      let remainder = a % b;
      let exponent = a ** b;

      console.log(sum);
      console.log(difference);
      console.log(multi);
      console.log(divide);
      console.log(remainder);
      console.log(exponent);

      //operaattorit_02
      /**Tehtävä: Merkkijonojen yhdistäminen
       * Luo kaksi muuttujaa, etunimi ja sukunimi, ja aseta niihin omat etu- ja sukunimesi.
       * Yhdistä nämä kaksi merkkijonoa ja tulosta tulos konsoliin.*/

      let firstName = "Topias";
      let lastName = "Tuominen";
      let fullName = firstName + " " + lastName;
      console.log(fullName);

      //funktiot_01
      // Kirjoita funktio sum1 siten, että se palauttaa a:n ja b:n summan. Käytä tavallista funktiota
      // Kirjoita funktio sum2, joka on sama kuin yllä, mutta on nuolifunktio

      function sum1(a, b) {
        return a + b;
      }

      const sum2 = (a, b) => a + b;

      // Esimerkki - älä muokkaa
      console.log(sum1(1, 3));
      console.log(sum1(2, 5));
      console.log(sum2(4, 3));
      console.log(sum2(7, 5));

      //funktiot_02
      // Kirjoita funktio multiply1 siten, että se palauttaa a:n ja b:n tulon (kertolaskun tulos). Käytä tavallista funktiota
      // Kirjoita funktio multiply2, joka on nuolifunktio

      function multiply1(a, b) {
        return a * b;
      }

      const multiply2 = (a, b) => a * b;

      // Esimerkkikäyttö - älä muokkaa
      console.log(multiply1(2, 4));
      console.log(multiply2(3, 2));

      //funktiot_03
      /** Harjoitus: Neliön pinta-ala
       * Tee funktio nimeltä laskeNelionPintaala, joka ottaa yhden parametrin: sivunPituus.
       * Funktio laskee annetun neliön pinta-alan kaavalla sivunPituus * sivunPituus ja palauttaa sen.
       * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
       * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

      function laskeNelionPintaala(sivunPituus) {
        return sivunPituus * sivunPituus;
      }

      console.log(laskeNelionPintaala(5));
      console.log(laskeNelionPintaala(10));

      //funktiot_04
      /** Harjoitus: Kolmion pinta-ala
       * Tee funktio nimeltä laskeKolmionPintaala, joka ottaa kaksi parametria: kannanPituus ja korkeus.
       * Funktio laskee annetun kolmion pinta-alan kaavalla kannanPituus * korkeus / 2  ja palauttaa sen.
       * Testaa funktiota antamalla sille eri sivun pituuksia ja tulosta pinta-alat konsoliin.
       * Voit käyttää joko nuolifunktiota tai tavallista funktiota*/

      function laskeKolmionPintaala(kannanPituus, korkeus) {
        return (kannanPituus * korkeus) / 2;
      }

      console.log(laskeKolmionPintaala(5, 10));
      console.log(laskeKolmionPintaala(10, 20));

      //merkkijonot_01
      /**
        Täydennä funktio getCharCount niin, että se palauttaa argumenttina str saamiensa merkkien lukumäärän.
        */

      function getCharCount(str) {
        return str.length;
      }

      // Esimerkkikäyttö - älä muokkaa
      console.log(getCharCount("Sam")); // 3
      console.log(getCharCount("Alex 123")); // 8
      console.log(getCharCount("Jimi was here")); // 13

      // Treenaa: Keksi itse samanlainen funktio eri nimellä

      function getChairCount(str) {
        return str.length;
      }
      // Kutsu tekemääsi funktiota
      console.log(getChairCount("Sam")); // 3
      console.log(getChairCount("Alex 123")); // 8
      console.log(getChairCount("Jimi was here")); // 13

      // merkkijonot_02
      /**
    Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
    */

    function shoutMyName(name) {
        return name.toUpperCase();
    }

        // Esimerkki - älä muokkaa
        console.log(shoutMyName('Sam')); // "SAM"
        console.log(shoutMyName('Charley')); // "CHARLEY"
        console.log(shoutMyName('alex')); // "ALEX"



        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function sayMyName(name) {
            return name.toUpperCase();
        }


        // Kutsu tekemääsi funktiota
        console.log(sayMyName('Topias'));

        // merkkijonot_03
        /**
        Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

        */
        function lowerName(name) {
            return name.toLowerCase();
        }

        // Esimerkki - älä muokkaa
        console.log(lowerName('Sam')); // "sam"
        console.log(lowerName('ALEX')); // "alex"



        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function lowerCaseName(name){
            return name.toLowerCase();
        }


        // Kutsu tekemääsi funktiota
        console.log (lowerCaseName('TOPIAS'));

        
        // merkkijonot_04

        /**
        Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
        */

        function getFirstCharacter(name) {
            return name[0];
        }

        // Esimerkki - älä muokkaa
        console.log(getFirstCharacter('Amsterdam')); // "A"
        console.log(getFirstCharacter('Japan')); // "J"




        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function getFirstIdiot (name){
            return name[0];
        }


        // Kutsu tekemääsi funktiota
        console.log(getFirstIdiot('Topias')); // "T"

        // merkkijonot_05
        /**
        Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
        */

        function getLastCharacter(name) {
            return name[name.length - 1];
        }
        
        // Esimerkki - älä muokkaa
        console.log(getLastCharacter('Sam')); // "m"
        console.log(getLastCharacter('Alex')); // "x"
        console.log(getLastCharacter('Charley')); // "y"
        
        
        
        // Treenaa: Keksi itse samanlainen funktio eri nimellä
        function getTheLastIdiot(name){
            return name[name.length - 1];
        }
  
  
  
        // Kutsu tekemääsi funktiota

        console.log(getTheLastIdiot('Topias')); // "s"

        // merkkijonot_06
        /**
        Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

        */
        function skipFirstCharacter(text) {
            return text.slice(1);
        }

        // Esimerkki - älä muokkaa
        console.log(skipFirstCharacter('Xcode')); // "code"
        console.log(skipFirstCharacter('Hello')); // "ello"



        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function skipTheFirstIdiot(text){
            return text.slice(1);
        }


        // Kutsu tekemääsi funktiota
        console.log(skipTheFirstIdiot('Topias')); // "opias"

        // merkkijonot_07

        /**
        Muokkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
        */

        function concatInitials(firstNameInitial, lastNameInitial) {
            return firstNameInitial + lastNameInitial;
        }

        // Esimerkki - älä muokkaa
        console.log(concatInitials('J', 'D')); // "JD"
        console.log(concatInitials('S', 'B')); // "SB"



        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function contactInitials(firstNameInitial, lastNameInitial){
            return firstNameInitial + lastNameInitial;
        }


        // Kutsu tekemääsi funktiota
        console.log(contactInitials('T', 'T')); // "TT"

        // merkkijonot_08
        /**
        Muokkaa funktio sayHello jotta se sisällyttää parametrina saamansa nimen tervehdykseen. 

        */
        function sayHello(name){ 
         return   `Hello ${name}`;
        }
        
        // Esimerkki - älä muokkaa
        console.log(sayHello('Alex')); // "Hello Alex"
        console.log(sayHello('Sam')); // "Hello Sam"
        
        
        
        // Treenaa: Keksi itse samanlainen funktio eri nimellä ja tervehdyksellä
        
        function sayGoodbye(name){
            return `Goodbye ${name}`;
        }
        
        
        // Kutsu tekemääsi funktiota
        console.log(sayGoodbye('Topias')); // "Goodbye Topias"

        // merkkijonot_09
        /**
        Muokkaa funktio getFullName function palauttamaan interpolation avulla so that it returns the person's full name by utilizing string interpolation.
        */

        function getFullName(firstName, lastName) {
            return `${firstName} ${lastName}`;
        }
        
        // Esimerkki - älä muokkaa
        console.log(getFullName('Sam', 'Doe')); // "Sam Doe"
        console.log(getFullName('Alex', 'Blue')); // "Alex Blue"
        
        
        
        // Treenaa: Keksi itse samanlainen funktio eri nimellä 
        
        function takeFullResponsibility(firstName, lastName){
            return `${firstName} ${lastName} `;
        }
        
        
        // Kutsu tekemääsi funktiota
        console.log(takeFullResponsibility('Topias', 'Tuominen')); // "Topias Tuominen"

        // merkkijonot_10
        /**
        Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
        */

        function capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            
        }

        // Esimerkki - älä muokkaa
        console.log(capitalize('sam')); // "Sam"
        console.log(capitalize('ALEX')); // "Alex"
        console.log(capitalize('chARLie')); // "Charlie"



        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function hospitalize(word){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }


        // Kutsu tekemääsi funktiota
        console.log(hospitalize('topias')); // "Topias"

        // ehtolauseet_01
        /**
        Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.
        */

        function canVote(age) {
            if (age >= 18) {
                return true;
            }
            else {
                return false;
            }
        }

        // Esimerkkikäyttö - älä muuta
        console.log(canVote(25)); // true
        console.log(canVote(18)); // true
        console.log(canVote(10)); // false



        // Treenaa: Keksi itse samanlainen funktio eri nimellä

        function canDrive(age){
            if (age >= 18){
                return true;
        }
        else {
            return false;
        }
        }

        // Kutsu tekemääsi funktiota
        console.log(canDrive(18)); // true

        // ehtolauseet_02

        /** 
        * Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
        * Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
        * Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
        */
        function getTemperature(temp) {
            if (temp < 15) {
                alert('Pue takki päälle!');
        }
        else {
            alert('Ei tarvitse pukea takkia!');
        }
        }

        let esimerkki = prompt('Mikä on nykyinen lämpötila?');

        let numero = Number(esimerkki);

        getTemperature(numero);

    



        // Treenaa: Keksi itse samanlainen funktio eri nimellä
        function getToHome(time) {
            if (time >= 23){
                alert('Mene kotiin!');
            }
            else {
                alert('Jää vielä hetkeksi!');
            }
        }



        // Kutsu tekemääsi funktiota
        let esimerkki2 = prompt('Paljon kello on?');
        let numero2 = Number(esimerkki2);
        getToHome(numero2);

        // ehtolauseet_05
        /**
        Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
            */

            function evenOrOdd(number) {
                if (number % 2 === 0) {
                    return 'even';
                }
                else {
                    return 'odd';
                }
            }

            // Esimerkkikäyttö - älä muokkaa
            console.log(evenOrOdd(25)); // "odd"
            console.log(evenOrOdd(18)); // "even"
            console.log(evenOrOdd(-17)); // "odd"

            // Treenaa: Keksi itse samanlainen funktio eri nimellä
            function isItFun(number){
                if (number % 4 === 0){
                    return 'fun';
                }
                else {
                    return 'not fun';
                }
                

            }

            // Kutsu tekemääsi funktiota
            console.log(isItFun(4)); // "fun"

            // ehtolauseet_06
            /**
            Kehitä funktio nimeltä greaterNum, joka:

            - Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
            - Palauttaa näistä kahdesta suuremman numeron.
            */

            function greaterNum(a, b) {
                if (a > b){
                    return a;
                }
                else {
                    return b;
            }
             

            }
        

            // Esimerkkikäyttö - älä muokkaa
            console.log(greaterNum(5, 10));
            console.log(greaterNum(2, 1));
            console.log(greaterNum(4, 25));

            // Treenaa: Keksi itse samanlainen funktio eri nimellä

            function smallerWeight(a, b){
                if (a <= b){
                    return a;
                }
                else {
                    return b;
                }
            }

            console.log(smallerWeight(65, 70));
            console.log(smallerWeight(80, 85));
            console.log(smallerWeight(90, 95));

            // ehtolauseet_07
            /**
            Kehitä funktio nimeltä assignGrade, joka:

            

            Hyväksyy yhden argumentin, numeerisen pistemäärän.
            Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
            - 'A' pistemäärille 90 tai enemmän.
            - 'B' pistemäärille 80-89.
            - 'C' pistemäärille 70-79.
            - 'D' pistemäärille 60-69.
            - 'F' pistemäärille alle 60.

            */
            
            function assignGrade(score) {
                if (score >= 90 ){
                    return 'A';
                }
                else if (score >= 80){
                    return 'B';
                }
                else if (score >= 70){
                    return 'C';
                }
                else if (score >= 60){
                    return 'D';
                }
                else if (score < 60){
                    return 'F';
                }
            }

            // Esimerkkikäyttö - älä muokkaa
            console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
            console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
            console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
            console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
            console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



            // Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.

            function assignGrade2(score) {
                if (score >= 90 ){
                    return 'A';
                }
                else if (score >= 80){
                    return 'B';
                }
                else if (score >= 70){
                    return 'C';
                }
                else if (score < 70){
                    return 'F';
                }
            }


            // Kutsu tekemääsi funktiota
            console.log('Sinä sait ' + assignGrade2(91)); // Sinä sait A
            console.log('Sinä sait ' + assignGrade2(81)); // Sinä sait B
            console.log('Sinä sait ' + assignGrade2(71)); // Sinä sait C
            console.log('Sinä sait ' + assignGrade2(61)); // Sinä sait F
            console.log('Sinä sait ' + assignGrade2(59)); // Sinä sait F

            // ehtolauseet_08
            /**
            Kirjoita funktio nimeltä pluralize, joka:

            Hyväksyy kaksi argumenttia: substantiivin ja numeron.
            Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

            */

            function pluralize(substantiivi, määrä) {
                if (määrä === 1) {
                    return määrä + ' ' + substantiivi;
                }
                else {
                    return määrä + ' ' + substantiivi + 'a';
            }
            }

            // Esimerkkikäyttö - älä muokkaa
            console.log('Minulla on ' + pluralize('kala', 0));
            console.log('Minulla on ' + pluralize('koira', 1));
            console.log('Minulla on ' + pluralize('papukaija', 7));


            // Treenaa: Keksi itse samanlainen funktio eri nimellä.

            function monistaja(objekti, lukumäärä){
                if (lukumäärä === 1){
                    return lukumäärä + ' ' + objekti;
                }
                else {
                    return lukumäärä + ' ' + objekti + 'a';
                }
            }



            // Kutsu tekemääsi funktiota
            console.log('Minulla on ' + monistaja('kissa', 0));
            console.log('Minulla on ' + monistaja('etana', 1));
            console.log('Minulla on ' + monistaja('orava', 7));

            // ehtolauseet_09

            /**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen
            vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */ 
            
            
            function magic8Ball(kysymys)  {
                let vastaus = Math.floor(Math.random() * 8);
                if (vastaus === 0) {
                    return 'Kyllä';
                } else if (vastaus === 1) {
                    return 'Ei';
                } else if (vastaus === 2) {
                    return 'Ehkä';
                } else if (vastaus === 3) {
                    return 'Ei koskaan';
                } else if (vastaus === 4) {
                    return 'Totta kai';
                } else if (vastaus === 5) {
                    return 'Kenties';
                } else if (vastaus === 6) {
                    return 'Ei ikinä';
                } else if (vastaus === 7) {
                    return 'Tietysti';
                }
            }

            // Esimerkkikäyttö - älä muokkaa
            console.log(magic8Ball('Tuleeko huomenna sade?'));
            console.log(magic8Ball('Olenko minä paras?'));
            console.log(magic8Ball('Onko maailma pyöreä?'));
            console.log(magic8Ball('Onko kahvi hyvää?'));
            console.log(magic8Ball('Onko koodaus kivaa?'));
            console.log(magic8Ball('Onko koodaus vaikeaa?'));
            console.log(magic8Ball('Onko koodaus helppoa?'));
            console.log(magic8Ball('Onko koodaus hauskaa?'));
            
            //silmukat_01
            //Tee ohjelma, joka tulostaa kaikki parittomat numerot 1 ja 100 välillä. Eli 1, 3, 5, 7, 9, 11 jne. 

            for (let i = 1; i <= 100; i += 2) {
                console.log(i);
            }

            //silmukat_02
            // Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
            // 2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville. 
            // Saat itse valita käytkö luvut läpi kaksi kertaa vai lopetatko lukuun 50.

            
                for (let i = 2; i <= 100; i += 2) {
                    console.log(i);
                }
            
            //silmukat_03
            // Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden. 
            //Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
            // Tehdään tämä opettajan esimerkkinä
            let etaisyys, aika; 
            while (true) {
                etaisyys = prompt('Anna etäisyys (km):');
                etaisyys = Number(etaisyys);
                aika = prompt('Anna aika (tunteina):');
                aika = Number(aika);
                let nopeus = etaisyys / aika;
                console.log('Keskinopeus on ' + nopeus + ' km/h');
                if (etaisyys === 0) {
                    break;
                }
            }
            //silmukat_04
            // Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty, 
            //ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
            // Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta. 
            let parilliset = 0;
            for (let i = 0; i < 20; i++) {
                let luku = prompt('Anna luku:');
                luku = Number(luku);
                if (luku % 2 === 0) {
                    parilliset++;
                }
            }
            console.log('Parillisia lukuja oli ' + parilliset);
            console.log('Parittomia lukuja oli ' + (20 - parilliset));
            

            
            //silmukat_05
            // Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0. 
            // Tässä vaiheessa ohjelma lopettaa toimintansa. 
            // Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.

            let summa = 0;
            let lkm = 0;
            while (true) {
                let luku = prompt('Anna luku:');
                luku = Number(luku);
                if (luku === 0) {
                    break;
                }
                summa += luku;
                lkm++;
            }
            let keskiarvo = summa / lkm;
            console.log('Keskiarvo on ' + keskiarvo);

            //silmukat_06

            /* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
            jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
            Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
            Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/

            let summattavat = 0;
            let lukumaara = 0;
            let jatka = 'k';

            while (jatka === 'k') {
                let luku = ('Anna luku:');
                luku = Number(luku);
                summattavat += luku;
                lukumaara++;
                jatka = prompt('Haluatko jatkaa numeroiden antamista? (k/e)');
            }
            let KA = summattavat / lukumaara;
            console.log('Keskiarvo on ' + KA);

            //silmukat_07

            let numbers = [];
            for (let i = 0; i < 10; i++) {
                let num = Number(prompt('Anna luku:'));
                numbers.push(num);
            }

            let totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
            let average = totalSum / numbers.length;
            let min = Math.min(...numbers);
            let max = Math.max(...numbers);

            console.log('Summa: ' + sum);
            console.log('Keskiarvo: ' + average);
            console.log('Pienin numero: ' + min);
            console.log('Suurin numero: ' + max);




                        
                


         
        
                
