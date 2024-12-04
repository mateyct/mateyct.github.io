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
    },
    {
        reference: 'Jacob 5:75',
        verse: "75 And it came to pass that when the Lord of the vineyard saw that his fruit was good, and that his vineyard was no more corrupt, he called up his servants, and said unto them: Behold, for this last time have we nourished my vineyard; and thou beholdest that I have done according to my will; and I have preserved the natural fruit, that it is good, even like as it was in the beginning. And blessed art thou; for because ye have been diligent in laboring with me in my vineyard, and have kept my commandments, and have brought unto me again the natural fruit, that my vineyard is no more corrupted, and the bad is cast away, behold ye shall have joy with me because of the fruit of my vineyard.",
        analysis: "As I&apos;ve spent time laboring to help bring people into the Lord&apos;s vineyard, or into His fold, I&apos;ve seen a bit of this happiness and joy. It&apos;s a reminder to me that the work I do isn&apos;t about me, even though it benefits me through blessings. It&apos;s about helping others to know of the love of God and Jesus Christ. The blessings that come are just the result of being blessed by being obedient, which I have seen in my life."
    },
    {
        reference: "Mosiah 18:26",
        verse: "26 And the priests were not to depend upon the people for their support; but for their labor they were to receive the grace of God, that they might wax strong in the Spirit, having the knowledge of God, that they might teach with power and authority from God.",
        analysis: "What I loved about this verse is the promised “wage” for laboring for God. It is not money or fame. It is the Holy Ghost and a connection with God. God promises us that as we labor for Him and His people, He will bless us with the Spirit and a better ability to teach with power and authority. I love this because it reminds me of what I need to focus on. I need put effort into serving God, and He will allow me to be a better instrument in His hands."
    },
    {
        reference: "Mosiah 21:16",
        verse: "16 And it came to pass that they began to prosper by degrees in the land, and began to raise grain more abundantly, and flocks, and herds, that they did not suffer with hunger.",
        analysis: "This verse reminds me to not being impatient or just sit and wait for blessings. This verse is part of the story of Limhi and his people that started to be more righteous, and little by little they received blessings. That is often how the Lord does it. Sometimes I just expect the Lord will bless me for doing something specific, but when that doesn&apos;t work, I remember that the Lord does things in His own time and in His own way."
    },
    {
        reference: "Mosiah 23:10",
        verse: "10 Nevertheless, after much tribulation, the Lord did hear my cries, and did answer my prayers, and has made me an instrument in his hands in bringing so many of you to a knowledge of his truth.",
        analysis: "The Lord always wants us to do more and be better for Him. This verse came from the story of Alma the older as he was in the wilderness with his people. Alma had done a great thing by repenting and by teaching people. One might hope that the Lord would recognize that, give him a pat on the back, and let him be done, but that is not what happened. The Lord continued to make Alma an instrument. To me, that means I need to always be willing to do more the God and be His instrument. When I&apos;ve done something good, I shouldn&apos;t just think I am done and sit back. I should continue and keep improving."
    },
    {
        reference: "Alma 5:14",
        verse: "14 And now behold, I ask of you, my brethren of the church, have ye spiritually been born of God? Have ye received his image in your countenances? Have ye experienced this mighty change in your hearts?",
        analysis: "Even though this verse is more of like a chastisement or a reminder to leave wicked ways, to me it also teaches an important lesson. The verse directly says that these people were in the church, implying they were already baptized. Yet Alma still asks if they have been born of God and if they have Him in their countenance. That means those things require consistent and sincere effort. To be truly changed, I must continue to put in effort to be a disciple of Christ. It must be consistent and sincere. That is the only way I can really change my heart."
    },
    {
        reference: "Alma 12:10",
        verse: "10 And therefore, he that will harden his heart, the same receiveth the lesser portion of the word; and he that will not harden his heart, to him is given the greater portion of the word, until it is given unto him to know the mysteries of God until he know them in full.",
        analysis: "This is meaningful to me because it teaches that how much we get out of hearing or studying God&apos;s word is completely dependent on the faith that we have. If we are diligent and give heed, we will learn a great deal, and eventually all of God&apos;s mysteries. If we harden our hearts or say we have enough, we will lose what we have. It will be important for me throughout my life to approach the word of God with a heart full of faith and a mind ready to accept what I learn. That is how I will understand what God wants me to know."
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