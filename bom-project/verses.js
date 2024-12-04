'use strict';

// set up verses
const verses = [
    {
        reference: '1 Nephi 13:37',
        verse: "37 And blessed are they who shall seek to bring forth my Zion at that day, for they shall have the gift and the power of the Holy Ghost; and if they endure unto the end they shall be lifted up at the last day, and shall be saved in the everlasting kingdom of the Lamb; and whoso shall publish peace, yea, tidings of great joy, how beautiful upon the mountains shall they be.",
        analysis: "I&apos;ve seen this verse come true in my life. At the times that I&apos;ve really put forth my best effort to build God&apos;s kingdom and serve others, I&apos;ve felt more happiness and joy. I&apos;ve seen the power that it can have in every person&apos;s life, and I know sharing the Gospel is an amazing way to feel peace yourself and give others peace."
    },
    {
        reference: 'Jacob 3:1',
        verse: "1 But behold, I, Jacob, would speak unto you that are pure in heart. Look unto God with firmness of mind, and pray unto him with exceeding faith, and he will console you in your afflictions, and he will plead your cause, and send down justice upon those who seek your destruction.",
        analysis: "This verse stuck out to me, and I felt it applied to my lens because it speaks of how our faith will result in these great blessings. I&apos;ve felt God&apos;s protection and refuge from those who seek to bring me down, especially while I was on my mission."
    }
];
window.onload = () => {
    let refs = document.getElementById("references");
    for(let i = 0; i < verses.length; i++) {
        let newRef = document.createElement('li');
        newRef.innerHTML = verses[i].reference;
        newRef.onclick = () => {
            document.getElementById("verse").innerHTML = verses[i].verse;
            document.getElementById("analysis").innerHTML = verses[i].analysis;
        };
        refs.appendChild(newRef);
    }
};