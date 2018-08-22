const { Command } = require('discord.js-commando');
const https = require('https');

module.exports = class MemeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'meme-me-up',
            aliases: ['memes-pls', 'meme'],
            group: 'basic',
            memberName: 'memes',
            description: 'Sends a random meme',
            examples: ['meme']
        });
      }

    run(msg) {
        console.log('memeing you up, boss');
        let toMeme = `
            https://i.redd.it/0ilh488xbudz.png
            https://cdn.discordapp.com/attachments/310611569794875404/353539349742092289/image.jpg
            http://weknowmemes.com/wp-content/uploads/2012/02/the-internet-is-a-series-of-tubes-and-theyre-full-of-cats.jpg
            http://assets8.popbuzz.com/2017/09/shooting-stars-meme-1488215847-list-handheld-0.png
            http://imgur.com/vG98twU
            https://thechive.files.wordpress.com/2016/07/the-dankest-memes-of-all-time-38-photos-36.jpg?quality=85&strip=info&w=600
            https://media0.giphy.com/media/ehc19YLR4Ptbq/giphy.gif
            https://qph.ec.quoracdn.net/main-qimg-cf520202236c0a99986988706131aafb-c
            https://qph.ec.quoracdn.net/main-qimg-762390f6c44fdcb31cf01657d776d181-c
            https://s-media-cache-ak0.pinimg.com/originals/2b/87/17/2b8717e385f04061c8b6b78cd4c663c7.jpg
            https://lh3.googleusercontent.com/-VHV916run58/WC9To_x72tI/AAAAAAAACkE/f59cQ9_9-XY/safe_image_thumb.gif?imgmax=800
            https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-41.jpg
            https://pbs.twimg.com/media/ClH8MiWUgAAkIqr.jpg
            https://s-media-cache-ak0.pinimg.com/originals/35/01/ae/3501ae95813921b4a17e7d9469f1ba05.jpg
            https://img.memecdn.com/me-programmer_o_331911.jpg
            https://s-media-cache-ak0.pinimg.com/736x/d4/f2/00/d4f20041254a0727ddce7cb81be9e68c.jpg
            https://wyncode.co/wp-content/uploads/2014/08/81.jpg
            http://4.bp.blogspot.com/-u16rpXWn7Nw/U1jWM7-8NVI/AAAAAAAAHkY/gshqLZwE8iE/s1600/Difference+Between+Gamers+&+Programmers+Keyboard.jpg
            https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvk7n1gMlDTW4V4BJ9dVbJuMNs0Js7nVXt2WqHzCU5hXbGNe2u
            http://2.bp.blogspot.com/-94oft_Og47c/U1ja4YagplI/AAAAAAAAHlU/Q0dCHUkj0_s/s1600/How+Programmers+Talk.jpg
            https://wyncode.co/wp-content/uploads/2014/08/191.jpg
            https://s-media-cache-ak0.pinimg.com/736x/cc/42/ae/cc42ae3bf4a60760c48f25b654c0cc83.jpg
            https://s-media-cache-ak0.pinimg.com/736x/e8/48/18/e84818a407481f290a786a9cadb2ee03.jpg
            https://s-media-cache-ak0.pinimg.com/736x/00/88/15/008815b7888e82d5a82dbd8eac2f0205.jpg
            https://s-media-cache-ak0.pinimg.com/736x/33/06/85/330685a41fa6198be3aee58339a37c62.jpg
            https://s-media-cache-ak0.pinimg.com/736x/03/a1/75/03a17558ed2efaea1ca19bbddea51dff.jpg
            https://s-media-cache-ak0.pinimg.com/736x/4f/54/29/4f5429df5ea6361fa8d3f08dfcdccdf9.jpg
            https://s-media-cache-ak0.pinimg.com/736x/6e/f0/bc/6ef0bc2a3298187807efa501cb05a375.jpg
            https://s-media-cache-ak0.pinimg.com/736x/ce/46/a6/ce46a66f29e4cc4a8179e44d70d2e560.jpg
            https://s-media-cache-ak0.pinimg.com/736x/20/1e/b1/201eb13e53e5d038e54b16f4f5786d0f.jpg
            https://s-media-cache-ak0.pinimg.com/736x/45/2b/9c/452b9c8cacfb365f9afa5baaa0bb59b4.jpg
            https://s-media-cache-ak0.pinimg.com/736x/ee/9a/08/ee9a08c938b4856c1b4d08486c89ad13.jpg
            https://s-media-cache-ak0.pinimg.com/736x/7e/90/6b/7e906b6eeac775ad40290f6d7a65f59c.jpg
            https://s-media-cache-ak0.pinimg.com/736x/eb/b5/d8/ebb5d8cb556236a732549ad83937546b.jpg
            https://s-media-cache-ak0.pinimg.com/736x/a2/9a/bc/a29abc6432badfba5106344c11c88029.jpg
            https://s-media-cache-ak0.pinimg.com/236x/87/dd/9e/87dd9ed4e8edeff76f8e5a1218656e16.jpg
            https://s-media-cache-ak0.pinimg.com/236x/eb/b5/d8/ebb5d8cb556236a732549ad83937546b.jpg
            https://s-media-cache-ak0.pinimg.com/236x/9f/7c/42/9f7c42a12a59e2706b144d62d9b67f4e.jpg
            https://cdn.discordapp.com/attachments/304065566396645377/323264999684309002/b5ac1149b38bfeec57a6e81331b699a675a2223faa69943c15a35c9409ba463f.png
            https://cdn.discordapp.com/attachments/283339767884677121/307266230203711489/image.jpg
            http://quotesnhumor.com/wp-content/uploads/2016/12/30-In-Real-Life-Memes-3-Real-Life-Funny-Memes.jpg
            http://cbsnews1.cbsistatic.com/hub/i/r/2016/12/20/d4acaba0-86d5-43ed-8f75-78b7ba6b8608/resize/620x465/e1d65d1488d27435ddc9e0670299dc44/screen-shot-2016-12-20-at-2-01-34-pm.png
            https://s-media-cache-ak0.pinimg.com/736x/3b/f8/39/3bf839473fdec43adaaba5b475832e3a.jpg
            http://www.fullredneck.com/wp-content/uploads/2016/04/Funny-Russia-Meme-20.jpg
            https://img.washingtonpost.com/news/the-intersect/wp-content/uploads/sites/32/2015/04/obama-meme.jpg
            http://www.fullredneck.com/wp-content/uploads/2016/11/Funny-Global-Warming-Meme-13.jpg
            https://i0.wp.com/blogs.techsmith.com/wp-content/uploads/2016/09/what-is-a-meme.jpg?resize=640%2C480
            https://s-media-cache-ak0.pinimg.com/736x/92/bd/51/92bd51939ce6e27f773aee3516b2cd6f.jpg
            https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nr0iyakAda0ySUV_JceEiG9LNwNthZ71hrbvq1vhHd0j7UNdxw
            https://s-media-cache-ak0.pinimg.com/736x/6f/28/66/6f2866766ac899a6f91bb4775fc69b2d.jpg
            https://s-media-cache-ak0.pinimg.com/736x/e2/86/f9/e286f9d7ecf6f571b4a58215a2170a80.jpg
            https://s-media-cache-ak0.pinimg.com/736x/7f/bd/94/7fbd94ac3dca74643cc73aede5da366d.jpg
            https://s-media-cache-ak0.pinimg.com/736x/3d/54/8b/3d548b4bd6c1651bd13ac48edb07eba7.jpg
            https://s-media-cache-ak0.pinimg.com/736x/01/0b/68/010b68214bf1eeb91060732aa58bed1e.jpg
            https://s-media-cache-ak0.pinimg.com/736x/34/8a/92/348a92212ef1bcd89c94555e3d8380b5.jpg
            https://s-media-cache-ak0.pinimg.com/736x/88/40/22/8840225f3b254ee4ecaafa17b3cf324b.jpg
            https://s-media-cache-ak0.pinimg.com/736x/ff/56/59/ff56598016c0529acf61c70f80530456.jpg
            http://i0.kym-cdn.com/photos/images/original/001/256/969/543.jpg
            https://carlchenet.com/wp-content/uploads/2016/01/githubdown.png
            https://i.redd.it/apbj2zma14h11.jpg
            https://i.redd.it/k63sys1b14h11.jpg
            https://i.redd.it/hl1yektby3h11.jpg
            https://i.redd.it/ocokt1l3b4h11.jpg
            https://i.redd.it/ps0jfmet12h11.jpg
            https://i.redd.it/oln6g8io53h11.jpg
            https://i.redd.it/4zv8gp1ys2h11.jpg
            https://i.redd.it/ncsn8tnjz1h11.jpg
            https://i.redd.it/s88hijpgc4r01.jpg
            https://imgur.com/mk12hAk
            https://i.redd.it/uj9zdnu1vt801.jpg
            https://i.redd.it/4lhmxjtj6yp01.jpg
            https://i.redd.it/zwmkz58dn2q01.jpg
            https://i.redd.it/1f3dzg8muat01.jpg
            https://i.redd.it/62tr4459cbu01.jpg
            https://i.redd.it/lnah9umk4hb11.jpg
            https://i.redd.it/hblvzujshja11.jpg
            https://i.redd.it/uzluqj1y9uu01.png
            https://i.redd.it/g7fouc97m3w01.png
            https://i.redd.it/7wgs4dkiihfz.png
            https://i.redd.it/65bzzioisir01.jpg
            https://i.redd.it/qt5p8ozio0a01.png
            https://i.redd.it/1cudu2jlgac01.jpg
            https://i.redd.it/19c4ggoz0ciz.png
            https://i.redd.it/2kjdazquq7b11.png
            https://i.redd.it/tf4j6airfhu01.jpg
            https://i.redd.it/cgew3q9qm2h11.jpg
            https://imgur.com/W4IqSa6
            https://i.redd.it/rqrwaya738h11.jpg
            https://i.redd.it/cpv4zj86q5h11.png
            https://i.redd.it/cqtircwmtw701.png
            https://i.redd.it/1zb3bomchdyy.jpg
            https://i.redd.it/lj3fll2qy3h11.jpg
            https://i.redd.it/1jen10yn03h11.jpg
            https://i.redd.it/kunghv6xg6c01.jpg
            https://imgur.com/1kyWvxG
            https://i.redd.it/ypelzg7uwzpz.jpg
            https://i.redd.it/15af2u95p1h11.jpg
            https://i.redd.it/7acxukumet511.jpg
            https://i.redd.it/chz6snjokx301.jpg
            https://i.redd.it/xz5cy5u0dkh11.jpg
            https://i.redd.it/1qzhs6apktpz.jpg
            https://i.redd.it/2080xwmvmwb01.jpg
            https://i.redd.it/737jnfeopamz.png
            https://i.redd.it/ia8jqzy3j3h11.jpg
            https://i.redd.it/r1lfqc8k2whz.jpg
            https://i.redd.it/6cwikrx3gow01.jpg
            https://i.redd.it/apzai45crjxz.jpg
            https://i.redd.it/r7un6wf43jzz.png
            https://i.redd.it/cbq06qopykd01.png
            https://imgur.com/YqGfQwE
            https://i.redd.it/pjn28trbn2kz.jpg
            https://i.redd.it/406a73am2xsz.png
            https://i.redd.it/mqcl6lmzjhez.jpg
            https://i.redd.it/xuzk9vl55rr01.jpg
            https://i.reddituploads.com/31f49e090a6243b6b2cf721dbae90ea6?fit=max&h=1536&w=1536&s=19f002388956128e446faca3b2649452
            https://imgur.com/Q5jkZwR
            https://i.redd.it/nfug9wz14gz01.jpg
            https://i.redd.it/zo2hsmpxin011.jpg
            https://i.reddituploads.com/469e9ecd4da24386aeb442206f5e48c4?fit=max&h=1536&w=1536&s=cb6a2106c2bcafe56360d29e3c9e79d8
        `
        let memeList = toMeme.split('\n');
        
        memeList = memeList[Math.floor(Math.random() * memeList.length)];
        msg.say(memeList);

        //sends report to bot-log channel
        client.channels.get("481553844132773888").send("Memes have rained down")

  };
}