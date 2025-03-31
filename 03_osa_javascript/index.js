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
            const distances = [10, 20, 30, 0]; // Example distances in kilometers
            const times = [1, 2, 3, 0]; // Example times in hours

            for (let i = 0; i < distances.length; i++) {
                if (distances[i] === 0) {
                    break;
                }
                let nopeus = distances[i] / times[i];
                console.log(`Keskinopeus on ${nopeus} km/h`);
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

            let sum = 0;
            let count = 0;
            let number;

            do {
                number = Number(prompt('Syötä numero (0 lopettaa):'));
                if (number !== 0) {
                    sum += number;
                    count++;
                }
            } while (number !== 0);

            if (count > 0) {
                let average = sum / count;
                console.log('Keskiarvo on ' + average);
            } else {
                console.log('Yhtään numeroa ei syötetty.');
            }

            //silmukat_06

            /* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
            jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
            Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
            Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.*/
            
            let summa = 0;
            let lukujenMaara = 0;

            while (true) {
                let numero = parseFloat(prompt('Syötä numero:'));

                summa += numero;
                lukujenMaara++;
                let vastaus;
                do {
                    vastaus = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
                 
                if (vastaus !== 'k' && vastaus !== 'e'){
                    // Jos vastaus ei ole 'k' tai 'e', näytä ilmoitus ja pyydä uutta vastausta
                    alert("Virheellinen syöte. Vastaa 'k' tai 'e'.");
                    
                }    
                }
                while (vastaus !== 'k' && vastaus !== 'e');

                // Jos vastaus on 'e', lopetetaan silmukka

                if (vastaus === 'e') {
                    break;
                }
                }


                // lasketaan keskiarvo

                let keskiarvo = summa / lukujenMaara;

                // Näytä KA

                console.log("Syötettyjen numeroiden keskiarvo:" + keskiarvo);
            
        



            //silmukat_07
            // Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä 
            // tulostaa pienimmän ja suurimman numeron.
            // Tähän on ainakin kaksi vaihtoehtoa, löydät ne esimerkkivastaukset - kansiosta

            let summa2 = 0;
            let lukujenMaara2 = 0;
            let pienin = Infinity;
            let suurin = -Infinity;

            for (let i = 0; i < 10; i++) {
                let numero = parseFloat(prompt('Syötä numero:'));
                summa2 += numero;
                lukujenMaara2++;
                if (numero < pienin) {
                    pienin = numero;
                }
                if (numero > suurin) {
                    suurin = numero;
                }

            }
            let keskiarvo2 = summa2 / lukujenMaara2;
            console.log('Summa: ' + summa2);
            console.log('Keskiarvo: ' + keskiarvo2);
            console.log('Pienin: ' + pienin);
            console.log('Suurin: ' + suurin);

            //silmukat_08

            // Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää. 
            //Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista. 
            //Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.

            let lukujenMaara3 = parseInt(prompt('Kuinka monta numeroa haluat syöttää?'));
            let pienin2 = Infinity;
            let suurin2 = -Infinity;

            for (let i = 0; i < lukujenMaara3; i++) {
                let numero = parseFloat(prompt('Syötä numero:'));
                if (numero < pienin2) {
                    pienin2 = numero;
                }
                if (numero > suurin2) {
                    suurin2 = numero;
                }
            }
            console.log('Pienin:' + pienin2);
            console.log('Suurin:' + suurin2);

            


            

            






            


