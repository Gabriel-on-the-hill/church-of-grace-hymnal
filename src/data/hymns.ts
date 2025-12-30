// Hymn type definition
export interface Hymn {
   id: number;
   title: string;
   author: string;
   year?: string;
   category: string;
   categoryId: number;
   lyrics: string;
}

export interface Category {
   id: number;
   name: string;
   slug: string;
   hymnCount: number;
}

export const categories: Category[] = [
   { id: 1, name: "Adoration and Praise", slug: "adoration-and-praise", hymnCount: 12 },
   { id: 2, name: "Jesus Christ", slug: "jesus-christ", hymnCount: 17 },
   { id: 3, name: "Grace and Salvation of God", slug: "grace-and-salvation", hymnCount: 10 },
   { id: 4, name: "Trust and Assurance", slug: "trust-and-assurance", hymnCount: 11 },
   { id: 5, name: "Guidance and Prayer", slug: "guidance-and-prayer", hymnCount: 7 },
   { id: 6, name: "Discipleship and Consecration", slug: "discipleship-and-consecration", hymnCount: 7 },
   { id: 7, name: "Victory and Service", slug: "victory-and-service", hymnCount: 7 },
   { id: 8, name: "Hope and Eternal Life", slug: "hope-and-eternal-life", hymnCount: 4 },
];

export const hymns: Hymn[] = [
   {
      id: 1,
      title: "Praise, My Soul, the King of Heaven",
      author: "Henry Francis Lyte",
      year: "1834",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Praise, my soul, the King of heaven;
   To His feet thy tribute bring.
   Ransomed, healed, restored, forgiven,
   Evermore His praises sing:
   Alleluia! Alleluia!
   Praise the everlasting King.

2. Praise Him for His grace and favor
   To our fathers in distress.
   Praise Him still the same as ever,
   Slow to chide, and swift to bless.
   Alleluia! Alleluia!
   Glorious in His faithfulness.

3. Father-like He tends and spares us;
   Well our feeble frame He knows.
   In His hands He gently bears us,
   Rescues us from all our foes.
   Alleluia! Alleluia!
   Widely yet His mercy flows.

4. Angels, help us to adore Him;
   Ye behold Him face to face;
   Sun and moon, bow down before Him,
   Dwellers all in time and space.
   Alleluia! Alleluia!
   Praise with us the God of grace.

5. Praise Him, soul, for all His blessings;
   Praise Him, for He is our Friend;
   He whose love is never failing,
   Endless, though our days should end.
   Alleluia! Alleluia!
   Praise the everlasting King.`
   },
   {
      id: 2,
      title: "O Worship the King",
      author: "Robert Grant",
      year: "1833",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. O worship the King, all glorious above,
   O gratefully sing God's power and God's love;
   Our Shield and Defender, the Ancient of Days,
   Pavilioned in splendor, and girded with praise.

2. O tell of God's might, O sing of God's grace,
   Whose robe is the light, whose canopy space,
   Whose chariots of wrath the deep thunder-clouds form,
   And dark is God's path on the wings of the storm.

3. The earth with its store of wonders untold,
   Almighty, Thy power hath founded of old;
   Hath stablished it fast by a changeless decree,
   And round it hath cast, like a mantle, the sea.

4. Thy bountiful care, what tongue can recite?
   It breathes in the air, it shines in the light;
   It streams from the hills, it descends to the plain,
   And sweetly distills in the dew and the rain.

5. Frail children of dust, and feeble as frail,
   In Thee do we trust, nor find Thee to fail;
   Thy mercies how tender, how firm to the end,
   Our Maker, Defender, Redeemer, and Friend.

6. O measureless Might, unchangeable Love,
   Whom angels delight to hymn Thee above,
   Thy ransomed creation, with glory ablaze,
   In true adoration shall sing to Thy praise!`
   },
   {
      id: 3,
      title: "O Praise Ye the Lord",
      author: "Henry Williams Baker",
      year: "1875",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. O praise ye the Lord! Praise Him in the height;
   Rejoice in His Word, ye angels of light;
   Ye heavens, adore Him by Whom ye were made,
   And worship before Him in brightness arrayed.

2. O praise ye the Lord! Praise Him upon earth,
   In tuneful accord, ye sons of new birth;
   Praise Him Who hath brought you His grace from above,
   Praise Him Who hath taught you to sing of His love.

3. O praise ye the Lord! All things that give sound;
   Each jubilant chord re-echo around;
   Loud organs, His glory forth tell in deep tone,
   And sweet harp, the story of what He hath done.

4. O praise ye the Lord! Thanksgiving and song.
   To Him be outpoured all ages along!
   For love in creation, for Heaven restored,
   For grace of salvation, O praise ye the Lord!`
   },
   {
      id: 4,
      title: "Holy, Holy, Holy! Lord God Almighty",
      author: "Reginald Heber",
      year: "1826",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Holy, holy, holy! Lord God Almighty!
   Early in the morning our song shall rise to Thee;
   Holy, holy, holy! Merciful and mighty!
   God in three persons, blessed Trinity!

2. Holy, holy, holy! All the saints adore Thee,
   Casting down their golden crowns around the glassy sea;
   Cherubim and seraphim falling down before Thee,
   Who wert, and art, and evermore shalt be.

3. Holy, holy, holy! Though the darkness hide Thee,
   Though the eye of sinful man Thy glory may not see;
   Only Thou art holy; there is none beside Thee,
   Perfect in power, in love and purity.

4. Holy, holy, holy! Lord God Almighty!
   All Thy works shall praise Thy name in earth, and sky, and sea;
   Holy, holy, holy! Merciful and mighty!
   God in three persons, blessed Trinity!`
   },
   {
      id: 5,
      title: "To God Be the Glory",
      author: "Fanny J. Crosby",
      year: "1875",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. To God be the glory, great things He hath done,
   So loved He the world that He gave us His Son,
   Who yielded His life an atonement for sin,
   And opened the life-gate that all may go in.

Refrain:
   Praise the Lord, praise the Lord, let the earth hear His voice!
   Praise the Lord, praise the Lord, let the people rejoice!
   O come to the Father through Jesus the Son,
   And give Him the glory, great things He hath done.

2. O perfect redemption, the purchase of blood,
   To ev'ry believer the promise of God;
   The vilest offender who truly believes,
   That moment from Jesus a pardon receives.

3. Great things He hath taught us, great things He hath done,
   And great our rejoicing through Jesus the Son;
   But purer, and higher, and greater will be
   Our wonder, our transport, when Jesus we see.`
   },
   {
      id: 6,
      title: "Let Us With a Gladsome Mind",
      author: "John Milton",
      year: "1623",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Let us with a gladsome mind,
   Praise the Lord, for He is kind:
   For His mercies shall endure,
   Ever faithful, ever sure.

2. Let us blaze His Name abroad,
   For of gods He is the God:
   For His mercies shall endure,
   Ever faithful, ever sure.

3. He with all commanding might,
   Filled the new made world with light:
   For His mercies shall endure,
   Ever faithful, ever sure.

4. All things living He doth feed;
   His full hand supplies their need:
   For His mercies shall endure,
   Ever faithful, ever sure.

5. Let us with a gladsome mind,
   Praise the Lord, for He is kind:
   For His mercies shall endure,
   Ever faithful, ever sure.`
   },
   {
      id: 7,
      title: "All Hail the Power of Jesus' Name",
      author: "Edward Perronet / John Rippon",
      year: "1779",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. All hail the power of Jesus' name!
   Let angels prostrate fall;
   Bring forth the royal diadem,
   And crown Him Lord of all.

2. Ye seed of Israel's chosen race,
   Ye ransomed from the fall,
   Hail Him Who saves you by His grace,
   And crown Him Lord of all.

3. Sinners, whose love can ne'er forget
   The wormwood and the gall,
   Go spread your trophies at His feet,
   And crown Him Lord of all.

4. Let every kindred, every tribe,
   On this terrestrial ball,
   To Him all majesty ascribe,
   And crown Him Lord of all.

5. Crown Him, ye martyrs of our God,
   Who from His altar call;
   Extol the Stem of Jesse's rod,
   And crown Him Lord of all.

6. O that with yonder sacred throng
   We at His feet may fall,
   We'll join the everlasting song,
   And crown Him Lord of all.`
   },
   {
      id: 8,
      title: "Now Thank We All Our God",
      author: "Martin Rinkart; Trans. Catherine Winkworth",
      year: "1636",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Now thank we all our God,
   With heart and hands and voices,
   Who wondrous things has done,
   In whom His world rejoices;
   Who from our mothers' arms
   Has blessed us on our way
   With countless gifts of love,
   And still is ours today.

2. O may this bounteous God
   Through all our life be near us,
   With ever joyful hearts
   And blessed peace to cheer us,
   To keep us in His grace,
   And guide us when perplexed,
   And free us from all ills
   Of this world in the next.

3. All praise and thanks to God
   The Father now be given,
   The Son and Spirit blest,
   Who reign in highest heaven,
   The one eternal God,
   Whom heaven and earth adore;
   For thus it was, is now,
   And shall be evermore.`
   },
   {
      id: 9,
      title: "Praise Him! Praise Him!",
      author: "Fanny J. Crosby",
      year: "1869",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Praise Him! Praise Him! Jesus, our blessed Redeemer!
   Sing, O earth, His wonderful love proclaim!
   Hail Him! Hail Him! Highest archangels in glory;
   Strength and honor give to His holy Name!
   Like a Shepherd, Jesus will guard His children,
   In His arms He carries them all day long:
   Praise Him! Praise Him! Tell of His excellent greatness;
   Praise Him! Praise Him! Ever in joyful song!

2. Praise Him! Praise Him! Jesus, our blessed Redeemer!
   For our sins He suffered, and bled, and died;
   He our Rock, our Hope of eternal salvation,
   Hail Him! Hail Him! Jesus the Crucified.
   Sound His praises! Jesus who bore our sorrows,
   Love unbounded, wonderful, Deep and strong:
   Praise Him! Praise Him! Tell of His excellent greatness;
   Praise Him! Praise Him! Ever in joyful song!

3. Praise Him! Praise Him! Jesus, our blessed Redeemer!
   Heav'nly portals loud with hosannas ring!
   Jesus, Savior, reigneth Forever and ever;
   Crown Him! Crown Him! Prophet, and Priest, and King!
   Christ is coming! Over the world victorious,
   Pow'r and glory Unto the Lord belong:
   Praise Him! Praise Him! Tell of His excellent greatness;
   Praise Him! Praise Him! Ever in joyful song!`
   },
   {
      id: 10,
      title: "Great Is Thy Faithfulness",
      author: "Thomas O. Chisholm",
      year: "1923",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Great is Thy faithfulness, O God my Father;
   There is no shadow of turning with Thee;
   Thou changest not, Thy compassions, they fail not;
   As Thou hast been, Thou forever wilt be.

Refrain:
   Great is Thy faithfulness! Great is Thy faithfulness!
   Morning by morning new mercies I see;
   All I have needed Thy hand hath provided—
   Great is Thy faithfulness, Lord, unto me!

2. Summer and winter and springtime and harvest,
   Sun, moon, and stars in their courses above
   Join with all nature in manifold witness
   To Thy great faithfulness, mercy, and love.

3. Pardon for sin and a peace that endureth,
   Thine own dear presence to cheer and to guide,
   Strength for today and bright hope for tomorrow,
   Blessings all mine, with ten thousand beside!`
   },
   {
      id: 11,
      title: "Be Glad in the Lord and Rejoice",
      author: "Mary E. Servoss",
      year: "1876",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. Be glad in the Lord and rejoice,
   All ye that are upright in heart;
   And ye that have made Him your choice,
   Bid sadness and sorrow depart.

Chorus:
   Rejoice, rejoice! Be glad in the Lord and rejoice!
   Rejoice, rejoice! Be glad in the Lord and rejoice!

2. Be joyful, for He is the Lord
   On earth and in heaven supreme;
   He fashions and rules by His word,
   The "Mighty" and "Strong" to redeem.

3. What though in the conflict for right
   Your enemies almost prevail,
   God's armies, just hid from your sight,
   Are more than the foes which assail.

4. Though darkness surround you by day,
   Your sky by the night be o'ercast,
   Let nothing your spirit dismay,
   But trust till the danger is past.

5. Be glad in the Lord and rejoice,
   His praises proclaiming in song;
   With harp and with organ and voice,
   The loud hallelujahs prolong.`
   },
   {
      id: 12,
      title: "How Great Thou Art",
      author: "Stuart K. Hine",
      year: "1949",
      category: "Adoration and Praise",
      categoryId: 1,
      lyrics: `1. O Lord my God, when I in awesome wonder
   Consider all the worlds Thy hands have made,
   I see the stars, I hear the rolling thunder,
   Thy power throughout the universe displayed.

Chorus:
   Then sings my soul, my Savior God, to Thee;
   How great Thou art! How great Thou art!
   Then sings my soul, my Savior God, to Thee;
   How great Thou art! How great Thou art!

2. When through the woods and forest glades I wander,
   And hear the birds sing sweetly in the trees;
   When I look down from lofty mountain grandeur
   And hear the brook and feel the gentle breeze.

3. And when I think that God, His Son not sparing,
   Sent Him to die, I scarce can take it in;
   That on the cross, my burden gladly bearing,
   He bled and died to take away my sin.

4. When Christ shall come, with shout of acclamation,
   And take me home, what joy shall fill my heart!
   Then I shall bow in humble adoration,
   And there proclaim, "My God, how great Thou art!"`
   }
];

