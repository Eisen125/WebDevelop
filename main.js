"use strict"


class Ad {
    constructor(name, templateUrl, texts, imagesUrl, days, fromDate, toDate, timeDuration, screens) {
        this.name = name
        this.templateUrl = templateUrl
        this.texts = texts
        this.imagesUrl = imagesUrl
        this.days = days
        this.fromDate = fromDate
        this.toDate = toDate
        this.timeDuration = timeDuration
        this.screens = screens
    }
}


let ads = [
    new Ad(
        "one",
        "C:\Users\עידו\Desktop\SHITPROJECT\templates\temp_A.html",
        ["text1", "text2", "text3", "text4"],
        ["C:\Users\עידו\Desktop\SHITPROJECT\images\tom3.png", "C:\Users\עידו\Desktop\SHITPROJECT\images\tom1.png"],
        {
            monday: {
                fromHour: '06:00',
                toHour: '12:00'
            },
            wednesday: {
                fromHour: '13:00',
                toHour: '20:00'
            },
            friday: {
                fromHour: '01:00',
                toHour: '23:00'
            }
        },

        "2022-04-01",
        "2022-08-31",
        3,
        {"1": true, "2": true}
    ),
    new Ad(
        "two",
        "C:\Users\עידו\Desktop\SHITPROJECT\templates\temp_B.html",
        ["text1", "text2", "text3", "text4", "text5"],
        ["C:\Users\עידו\Desktop\SHITPROJECT\images\tom2.png"],
        {
            tuesday: {
                fromHour: '10:00',
                toHour: '16:00'
            },
            wednesday: {
                fromHour: '10:00',
                toHour: '16:00'
            },
            friday: {
                fromHour: '01:00',
                toHour: '23:00'
            }
        },
        "2022-04-20",
        "2022-08-31",
        5,
        {"1": true, "3": true}
    ),
    new Ad(
        "three",
        "C:\Users\עידו\Desktop\SHITPROJECT\templates\temp_C.html",
        ["Giving me the option of changing images was a mistake"],
        ["https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif",
            "https://media.giphy.com/media/Opgs8NUosTAnRSFYzc/giphy.gif",
            "https://media.giphy.com/media/koUtwnvA3TY7C/giphy.gif"],
        {
            all: true,
            fromHour: '08:00',
            toHour: '23:50'
        },
        "2022-04-26",
        "2022-08-01",
        7,
        {"2": true, "3": true}
    ),
    new Ad(
        "four",
        "C:\Users\עידו\Desktop\SHITPROJECT\templates\temp_A.html",
        ["text1", "text2"],
        [],
        {
            monday: {
                fromHour: '06:00',
                toHour: '12:00'
            },
            friday: {
                fromHour: '01:00',
                toHour: '23:00'
            }
        },
        "2022-04-27",
        "2022-08-28",
        4,
        {"1": true}
    ),
    new Ad(
        "five",
        "C:\Users\עידו\Desktop\SHITPROJECT\templates\temp_B.html",
        ["text1", "text2", "text3", "text4", "text5"],
        ["C:\Users\עידו\Desktop\SHITPROJECT\images\snare.png", "C:\Users\עידו\Desktop\SHITPROJECT\images\tom1.png"],
        {
            monday: {
                fromHour: '01:00',
                toHour: '23:00',
            }, tuesday: {
                fromHour: '01:00',
                toHour: '23:00',
            }, wednesday: {
                fromHour: '01:00',
                toHour: '23:00',
            },
            friday: {
                fromHour: '01:00',
                toHour: '23:40'
            },
            saturday: {
                fromHour: '00:00',
                toHour: '23:00'
            }
        },

        "2022-04-27",
        "2022-08-30",
        6,
        {"3": true}
    ),
    new Ad(
        "six",
        "C:\Users\עידו\Desktop\SHITPROJECT\templates\temp_B.html",
        ["text1", "text2", "text3"],
        ["C:\Users\עידו\Desktop\SHITPROJECT\images\crash.png", "C:\Users\עידו\Desktop\SHITPROJECT\images\kick.png"],
        {
            monday: {
                fromHour: '01:00',
                toHour: '23:00',
            }, tuesday: {
                fromHour: '01:00',
                toHour: '23:00',
            }, wednesday: {
                fromHour: '01:00',
                toHour: '23:00',
            }, thursday: {
                fromHour: '01:00',
                toHour: '20:43'
            },
            tuesday: {
                fromHour: '22:00',
                toHour: '23:00'
            }
        },

        "2022-04-27",
        "2022-08-30",
        6,
        {"3": true}
    )
];


let applicableAds = new Array();
let timeout = 0;
let timeSet = timeout;
let adIndex = -1;

$(document).ready(function () {

    timeout = setInterval(showAds, timeout);

});

async function showAds() {
    console.log("change: " + timeSet);
    let date = new Date();
    let Days = date.getDay();
    let Daystring;

    switch (Days) {
        case 0:
            Daystring = 'sunday';
            break;
        case 1:
            Daystring = 'monday';
            break;
        case 2:
            Daystring = 'tuesday';
            break;
        case 3:
            Daystring = 'wednesday';
            break;
        case 4:
            Daystring = 'thursday';
            break;
        case 5:
            Daystring = 'friday';
            break;
        case 6:
            Daystring = 'saturday';
            break;
    }
    ads.forEach(ad => {
        if (ad.days.hasOwnProperty(Daystring) || ad.days.all == true) {
            const from_date = new Date(ad.fromDate);
            const to_date = new Date(ad.toDate);
            let currentTime = date.getHours() + ":" + date.getMinutes();

            if (from_date <= date && date <= to_date) {

                if (ad.days.all == true && ad.days.fromHour <= currentTime &&
                    currentTime <= ad.days.toHour) {
                    if (applicableAds.indexOf(ad) == -1) {
                        applicableAds.push(ad);
                    }
                } else if (ad.days.hasOwnProperty(Daystring) &&
                    ad.days[Daystring].fromHour <= currentTime &&
                    currentTime <= ad.days[Daystring].toHour) {
                    if (applicableAds.indexOf(ad) == -1) {
                        applicableAds.push(ad);
                    }
                } else if (applicableAds.indexOf(ad) != -1) {
                    applicableAds.splice(applicableAds.indexOf(ad), 1);
                }
            } else if (applicableAds.indexOf(ad) != -1) {
                applicableAds.splice(applicableAds.indexOf(ad), 1);
            }
        }
    });

    clearInterval(timeout);
    if (applicableAds.length > 0) {
        adIndex = (adIndex + 1) % applicableAds.length;


        setAdParams(applicableAds[adIndex]);
        let ad = applicableAds[adIndex];
        let iframe = document.getElementById('main_frame');
        let mainDiv = document.getElementById('main_div');
        $('#main_div').load(applicableAds[adIndex].templateUrl, () => {
            let adName = document.getElementById("ad-name");
            adName.innerHTML = ad.name;
            iframe.width = iframe.contentWindow.document.body.scrollWidth;
            iframe.height = iframe.contentWindow.document.body.scrollHeight;
            let textAmount = ad.texts.length + 1;
            let imgAmount = ad.imagesUrl.length + 1;
            let textReference;
            let imgReference;
            $('img').hide();


            for (let textIter = 1; textIter < textAmount; textIter++) {
                textReference = iframe.contentWindow.document.getElementById('text' + textIter);
                textReference = document.getElementById('text' + textIter);
                textReference.innerHTML = ad.texts[textIter - 1];
                textReference.style.visibility = "visible";
            }

            for (let imgIter = 1; imgIter < imgAmount; imgIter++) {
                imgReference = iframe.contentWindow.document.getElementById('img' + imgIter);
                imgReference = document.getElementById('img' + imgIter);
                imgReference.src = ad.imagesUrl[imgIter - 1];
                imgReference.visibility = "visible";
                $('img' + imgIter).toggle();
                imgReference.style = "display: ;"
            }

            timeSet = applicableAds[adIndex].timeDuration * 1000;
            timeout = setInterval(showAds, timeSet);
        });

        iframe.src = ad.templateUrl;
        iframe.onload = () => {


        }
    } else {
        timeSet = 2000;
        timeout = setInterval(showAds, timeSet);
    }
}