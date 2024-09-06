let k = 0
const VTB = document.getElementById('vtbs')
var profileOutput = ''
    // var vtubers = [
    //     //0-5
    //     'Kizuna AI', //hololive
    //     'Gawr Gura', //hololive
    //     'Vox akuma', //hololive
    //     '神楽七奈', //hololive
    //     '湊-阿库娅', //hololive
    //     //6-8
    //     'Veibae', //VShojo
    //     'Nyanners', //VShojo
    //     '樱花狼', //VShojo
    //     //9-11
    //     '西园千草', //nijisanji
    //     '御伽原江良', //nijisanji
    //     '一百满天原莎乐美', //nijisanji
    //     //12-13
    //     '花留Karu', //VirtuaReal
    //     '瑞娅_Rhea', //VirtuaReal
    //     //14-16
    //     'Paryi', //P
    //     '椎名菜羽', //P
    //     '神楽めあ', //P Mea
    //     //17-26
    //     '冰糖IO', //personal
    //     'OveRidea_China', //personal
    //     'Hiiro', //personal
    //     '阿准', //personal
    //     '梦音茶糯', //personal
    //     '步玎Pudding', //personal
    //     '宇佐紀ノノ_usagi', //?personal
    //     'LuckyCupcake', //?personal
    //     '時雨羽衣', //?personal
    //     '有栖Mana', //?personal
    //     //27-33
    //     '希月萌奈', //?
    //     'Projekt Melody', //?
    //     'Shoto', //?
    //     '永雏塔菲', //?
    //     '黑泽诺亚NOIR', //?
    //     'Shizukou', //?
    //     '鹿乃ちゃん', //?
    //     //34-36
    //     '蕾尔娜Leona', //company
    //     '陆鳐LuLu', //!
    //     '木子喵neko', //personal
    //     //37-41
    //     '向晚', //A-SOUL AVA
    //     '贝拉kira', //A-SOUL Bella
    //     '珈乐', //A-SOUL Carol
    //     '嘉然', //A-SOUL Diana
    //     '乃琳' //A-SOUL Eileen
    // ]
var thumbs = [
    'https://i2.hdslb.com/bfs/face/478c8351dc6046e32993f8b03a0d566ffb395ff1.jpg@96w_96h_1c.webp',
    'https://yt3.googleusercontent.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s160-c-k-c0x00ffffff-no-rj',
    'https://i2.hdslb.com/bfs/face/70afd239f7f7a0c33b03dbfc5aa74775360176da.jpg@96w_96h_1c.webp',
    'https://i0.hdslb.com/bfs/face/a7195c09c6ba4722966d745d6f692035d3fe4d95.jpg@96w_96h_1c.webp',
    'https://img0.baidu.com/it/u=2867066545,1052264813&fm=253&fmt=auto&app=138&f=GIF?w=498&h=498',
    'img/Nyatasha_Nyanners.jpg',
    'img/Silvervale.jpg',
    'img/Projekt_Melody.jpg',
    'https://i2.hdslb.com/bfs/face/ceac9cbe216e323669b5ef5331f7a6dfec4c4a80.jpg@96w_96h_1c.webp',
    'img/Nishizono_Chigusa.jpg',
    'https://i1.hdslb.com/bfs/face/8c3fe8ee603a4a89088ecf0aa277b6e86e75eab9.jpg@96w_96h_1c.webp',
    'https://i1.hdslb.com/bfs/face/07ea9c894ab0b230a9a3305a6f0a975bc2a1b989.jpg@240w_240h_1c_1s.webp',
    'https://i1.hdslb.com/bfs/face/b1fafc27b231fb006f21b96d4efaee9567e43f4f.jpg@240w_240h_1c_1s.webp',
    'https://img.moegirl.org.cn/common/5/51/VirtuaReal_fourteen.png',
    'https://i2.hdslb.com/bfs/face/ba664dbe2ef793179652574467b97ab2d7d8f305.jpg@96w_96h_1c.webp',
    'https://i2.hdslb.com/bfs/face/deb23424847caa540b708d8afdc96a70444aab99.jpg@96w_96h_1c.webp',
    'https://i1.hdslb.com/bfs/face/9d7dcfe1eb2b42ab4ca7684e1c3b136372944d84.jpg@240w_240h_1c_1s.webp',
    'https://i0.hdslb.com/bfs/face/7c945458615d8e2d2944d5aac1a998c9d9f5550f.jpg@240w_240h_1c_1s.webp',
    'https://img.moegirl.org.cn/common/thumb/3/30/Kyouka_half_portrait.png/420px-Kyouka_half_portrait.png',
    'https://img.moegirl.org.cn/common/thumb/6/61/%E5%86%B0%E7%B3%96%E5%A5%B3%E4%BB%86%E5%BD%A2%E8%B1%A1-2.png/420px-%E5%86%B0%E7%B3%96%E5%A5%B3%E4%BB%86%E5%BD%A2%E8%B1%A1-2.png',
    'https://i1.hdslb.com/bfs/face/0be714bbe70488b8796008bbb17098265bb29c19.jpg@240w_240h_1c_1s.webp',
    'https://i2.hdslb.com/bfs/face/9072346b9c54d90c0e4cb175179c8c36c23bc60e.jpg@240w_240h_1c_1s.webp',
    'https://img.moegirl.org.cn/common/thumb/e/e0/%E6%A2%A6%E9%9F%B3%E8%8C%B6%E7%B3%AF%E4%B8%8A%E5%8D%8A%E8%BA%AB%E7%99%BD%E8%83%8C%E6%99%AF.png/420px-%E6%A2%A6%E9%9F%B3%E8%8C%B6%E7%B3%AF%E4%B8%8A%E5%8D%8A%E8%BA%AB%E7%99%BD%E8%83%8C%E6%99%AF.png',
    'https://i1.hdslb.com/bfs/face/44bef274ce26a6d69dd09e9cea32dd23b03768d3.jpg@240w_240h_1c_1s.webp',
    'https://i2.hdslb.com/bfs/face/d162e0fcc33efc50c21af30b3efa8f01ede5061a.jpg@96w_96h_1c.webp',
    'https://i0.hdslb.com/bfs/face/f34bf1147f229241f1d76073bad4222a1f32bb85.jpg@240w_240h_1c_1s.webp',
    'https://img.moegirl.org.cn/common/f/fe/ShigureUi_icon.jpg',
    'https://i1.hdslb.com/bfs/face/bc9d8ef16a6bdd469b5f5d02d80d3b5fd25435bc.jpg@240w_240h_1c_1s.webp',
    'https://img.moegirl.org.cn/common/thumb/c/ca/Shoto_smile.jpg/149px-Shoto_smile.jpg',
    'https://i1.hdslb.com/bfs/face/4907464999fbf2f2a6f9cc8b7352fceb6b3bfec3.jpg@240w_240h_1c_1s.webp',
    'https://i0.hdslb.com/bfs/face/48c39b0e56bd9d270a925c691e7596a49e27f035.jpg@240w_240h_1c_1s.webp',
    'https://img.moegirl.org.cn/common/thumb/6/64/%E8%8A%B1%E5%AF%84-%E9%B9%BF%E4%B9%83.jpg/149px-%E8%8A%B1%E5%AF%84-%E9%B9%BF%E4%B9%83.jpg',
    'https://img.moegirl.org.cn/common/thumb/b/b9/LuyeeLuLu.png/420px-LuyeeLuLu.png',
    'https://img.moegirl.org.cn/common/thumb/3/3d/%E6%9C%A8%E5%AD%90%E5%96%B5neko.webp/240px-%E6%9C%A8%E5%AD%90%E5%96%B5neko.webp.png',
    'https://img.moegirl.org.cn/common/thumb/0/06/%E9%BB%91%E6%B3%BD%E8%AF%BA%E4%BA%9ANoir%EF%BC%8825%E4%B8%87%E7%B2%89%E6%96%B0%E8%A1%A3%2C1080p%EF%BC%89.png/420px-%E9%BB%91%E6%B3%BD%E8%AF%BA%E4%BA%9ANoir%EF%BC%8825%E4%B8%87%E7%B2%89%E6%96%B0%E8%A1%A3%2C1080p%EF%BC%89.png',
    'https://img.moegirl.org.cn/common/thumb/a/a9/%E8%95%BE%E5%B0%94%E5%A8%9C2.0.jpg/154px-%E8%95%BE%E5%B0%94%E5%A8%9C2.0.jpg',
    'https://i0.hdslb.com/bfs/face/566078c52b408571d8ae5e3bcdf57b2283024c27.jpg@240w_240h_1c_1s.webp',
    'https://i2.hdslb.com/bfs/face/668af440f8a8065743d3fa79cfa8f017905d0065.jpg@240w_240h_1c_1s.webp',
    'https://i1.hdslb.com/bfs/face/a7fea00016a8d3ffb015b6ed8647cc3ed89cbc63.jpg@96w_96h_1c.webp',
    'https://img1.baidu.com/it/u=1648853151,425434859&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    'https://i1.hdslb.com/bfs/face/8895c87082beba1355ea4bc7f91f2786ef49e354.jpg@96w_96h_1c.webp'
]
var platforms = [
    'https://www.youtube.com/c/AIChannel',
    'https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g',
    'https://www.youtube.com/c/%E3%81%8B%E3%81%90%E3%82%89%E3%81%AA%E3%81%AA%E3%81%AA%E3%81%AA%E3%81%8B%E3%81%90%E8%BE%9B%E5%85%9ACh',
    'https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg',
    'https://www.youtube.com/c/VeiTWITCH',
    'https://www.youtube.com/c/Nyanners',
    'https://www.youtube.com/c/Silvervale',
    'https://www.youtube.com/c/ProjektMelodyOfficial',
    'https://www.youtube.com/channel/UCckdfYDGrjojJM28n5SHYrA',
    'https://www.youtube.com/channel/UCkngxfPbmGyGl_RIq4FA3MQ',
    'https://space.bilibili.com/436596838/?spm_id_from=333.999.0.0',
    'https://www.youtube.com/channel/UCgIfLpQvelloDi8I0Ycbwpg',
    'https://space.bilibili.com/370687588/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/690608698/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/1576121/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/623441612/?spm_id_from=333.999.0.0',
    'https://www.youtube.com/channel/UCWCc8tO-uUl_7SJXIKJACMw',
    'https://space.bilibili.com/3149619/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/18149131/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/198297/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/508963009/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/490981706/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/140378/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/416622817/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/313248263/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/1195405071/?spm_id_from=333.999.0.0',
    'https://www.youtube.com/channel/UCt30jJgChL8qeT9VPadidSw',
    'https://space.bilibili.com/591892279/',
    'https://www.youtube.com/c/ShotoYT',
    'https://space.bilibili.com/1265680561/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/1042854135/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/316381099/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/1856528671/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/27735697/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/922573/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/473244363/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/672346917/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/672353429/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/351609538/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/672328094/?spm_id_from=333.999.0.0',
    'https://space.bilibili.com/672342685/?spm_id_from=333.999.0.0'
]

/*
 *createFile()
 *EnName-{string}-English name
 *Chname-{string}-Chinese name
 *otherNames-{list of strings}
 *tags-{list of strings}-male|female,!knowledgeable etc.
 *stat-{string}-company name|personal|misc.
 *img-{URL}-avatar image
 *platform-{URL}-Each vtuber's major platform they are now
 *return-{object}
 */
function createFile(enName, chName, otherNames, tags, stat, img, platform) {
    return {
        enName: enName,
        chName: chName,
        otherNames: otherNames,
        tags: tags,
        stat: stat,
        img: img,
        platform: platform
    }
}

var v = {
    //0-3
    'Kizuna_AI': createFile('Kizuna AI', "绊爱", ['爱酱'], ['female', 'pink', 'white'], 'hololive'), //hololive
    'Gawr_Gura': createFile('Gawr Gura', "古拉", ['小鲨鱼'], ['female', 'blue', 'white'], 'hololive'), //hololive
    'Kagura_Nana': createFile('Kagura Nana', "神楽七奈", ['狗妈'], ['female', 'white'], 'hololive'), //hololive
    'Minato_Aqua': createFile('Minato Aqua', "湊阿库娅", [''], ['female', 'pink', 'white'], 'hololive'), //hololive
    //4-7
    'Veibae': createFile('Veibae', "Veibae", ['魏碑', '白色魅魔'], ['female', 'succubus'], 'VShojo'), //VShojo
    'Nyatasha_Nyanners': createFile('Nyatasha Nyanners', "喵娜丝", [''], ['female', 'pink', 'white'], 'VShojo'), //VShojo
    'Silvervale': createFile('Silvervale', "樱花狼", [''], ['female', 'blue', 'pink'], 'VShojo'), //VShojo
    'Projekt_Melody': createFile('Projekt Melody', "Projekt Melody", [''], ['female', 'purple'], 'VShojo'), //VShojo
    //8-11
    'Vox_akuma': createFile('Vox akuma', "Vox Akuma", ['daddy'], ['male', 'black'], 'nijisanji'), //nijisanji
    'Nishizono_Chigusa': createFile('Nishizono Chigusa', "西园千草", [''], ['female', 'blue'], 'nijisanji'), //nijisanji
    'Otogibara_Era': createFile('Otogibara Era', "御伽原江良", ['猴子'], ['female', 'orange'], 'nijisanji'), //nijisanji
    'Hyakumantenbara_Salome': createFile('Hyakumantenbara Salome', "一百满天原莎乐美", [''], ['female', 'purple'], 'nijisanji'), //nijisanji
    //12-13
    'Karu': createFile('Karu', "花留", ['藏尸系vtuber'], ['female', 'white'], 'VirtuaReal'), //VirtuaReal
    'Rhea': createFile('Rhea', "瑞娅", [''], ['female', 'white'], 'VirtuaReal'), //VirtuaReal
    //14-17--------------------------------------------------------------------------------------------------------------------------
    'Paryi': createFile('Paryi', "帕里", [''], ['male', 'white'], 'P'), //P
    'Shiina_Nanoha': createFile('Shiina Nanoha', "椎名菜羽", [''], ['female', 'white'], 'P'), //P
    'Kagura_Mea': createFile('Kagura Mea', "神乐Mea", ['屑女仆'], ['female', 'blue', 'white', 'black'], 'P'), //P Mea
    'Alice_Mana': createFile('Alice Mana', "有栖Mana", ['小祖宗'], ['female', 'black', 'white'], 'P'), //P
    //18
    'Jing_Hua': createFile('Jing Hua', "京华", ['锤子'], ['male', 'blue', 'white'], 'OveRidea'), //OveRidea
    //19-33
    'Bing_Tang': createFile('Bing Tang', "冰糖IO", [''], ['female', 'orange', 'red'], 'personal'), //personal
    'Hiiro': createFile('Hiiro', "希萝", [''], ['female', 'pink', 'white'], 'personal'), //personal
    'A_Zhun': createFile('A Zhun', "阿准", [''], ['female', 'blue', 'white'], 'personal'), //personal
    'Yumeoto_Chano': createFile('Yumeoto Chano', "梦音茶糯", ['大小姐'], ['female', 'tan'], 'personal'), //personal
    'Pudding': createFile('Pudding', "步玎", ['布布', '布丁'], ['female', 'pink'], 'personal'), //personal
    'Usaki_Nono': createFile('Usaki Nono', "宇佐纪诺诺", [''], ['female', 'pink'], 'personal'), //personal
    'LuckyCupcake': createFile('LuckyCupcake', "LuckyCupcake", [''], ['female', 'pink'], 'personal'), //personal
    'Shigure_Ui': createFile('Shigure Ui', "時雨羽衣", [''], ['female', 'blonde'], 'personal'), //personal
    'Kitzuki': createFile('Kitzuki', "希月萌奈", ['小鲸鱼'], ['female', 'blue', 'white'], 'personal'), //personal
    'Shoto': createFile('Shoto', "Shoto", [''], ['male', 'blue', 'white'], 'personal'), //personal
    'Ace_Taffy': createFile('Ace Taffy', "永雏塔菲", [''], ['female', 'pink'], 'personal'), //personal
    'Shizukou': createFile('Shizukou', "Shizukou", [''], ['female', 'blue', 'pink'], 'personal'), //personal
    'Kano': createFile('Kano', "鹿乃", [''], ['female', 'pink', 'white'], 'personal'), //personal
    'LuyeeLuLu': createFile('LuyeeLuLu', "陆鳐LuLu", ['6166'], ['female', 'blue', 'pink', 'silver'], 'personal'), //personal
    'Mu_Zi_Neko': createFile('Mu Zi Neko', "木子喵", [''], ['female', 'blue', 'white'], 'personal'), //personal
    //34
    'Noir': createFile('Noir', "黑泽诺亚", [''], ['female', 'black', 'white'], '幻想社'), //幻想社
    //35
    'Leona': createFile('Leona', "蕾尔娜", [''], ['female', 'blue', 'white'], 'Meta Mythos'), //Meta Mythos
    //36-41
    'Ava': createFile('Ava', "向晚", ['爹', '王向晚', '杜向晚'], ['female', 'purple'], 'A-SOUL'), //A-SOUL AVA
    'Bella': createFile('Bella', "贝拉", ['王贝拉', '拉姐'], ['female', 'red'], 'A-SOUL'), //A-SOUL Bella
    'Carol': createFile('Carol', "珈乐", ['王力口乐'], ['female', 'purple'], 'A-SOUL'), //A-SOUL Carol
    'Diana': createFile('Diana', "嘉然", ['然然', '王嘉然', '然比', '圣嘉然'], ['female', 'pink'], 'A-SOUL'), //A-SOUL Diana
    'Eileen': createFile('Eileen', "乃琳", ['王乃琳'], ['female', 'silver'], 'A-SOUL') //A-SOUL Eileen
}

for (var key in v) {
    var tagsOutput = ''
    v[key].img = thumbs[k]
    v[key].platform = platforms[k++]
    for (var t = 0; t < v[key].tags.length; ++t) {
        tagsOutput += '<br>-' + v[key].tags[t]
    }
    profileOutput += '<a href="' + v[key].platform + '" target="_blank" rel="noopener"><li class="profile"><div class="thumbnail" style="width: 100px;height: 100px;"><img id="' + key + '" src="' + v[key].img + '" alt="' + v[key].chName + '" width="100px"></div><div class="name" style="width: 100%;"><p>' + v[key].chName + '</p></div><div class="tags"><p>tags:' + tagsOutput + '</p></div></li></a>\n'
        // console.log(key + '=' + v[key])
        // console.log(v[key].chName)
}
VTB.innerHTML = profileOutput
