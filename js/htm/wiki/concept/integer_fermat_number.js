/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Number/Integer/Fermat Number']=Kx(

detail('费马数表',Table([['','$F_n='+msups([2,2,'n'],'')+'+1$____已知300多个费马合数'+href(H+'www.prothsearch.com/fermat.html','最新进展'),'位数','分解式','素真因子数']],[
	['3\n$F_{0}$','1','素数 = $M_2$','0'],
	['5\n$F_{1}$','1','素数','0'],
	['17\n$F_{2}$','2','素数','0'],
	['257\n$F_{3}$','3','素数','0'],
	['65537\n$F_{4}$','5','素数','0'],
	['4294967297\n$F_{5}$','10','$641×6700417$'+br+'$=(5‧2^7+1) \\\\ (52347‧2^7+1)$','2'],
	['18446744073709551617\n$F_{6}$','20','274177×67280421310721（14位）'+br+'$=(1071‧2^8+1) \\\\ (262814145745‧2^8+1)$','2'],
	['340282366920938463463374607431768211457\n$F_{7}$','39','59649589127497217（17位）× 5704689200685129054721（22位）'+br+'$=(116503103764643‧2^9+1) \\\\ (11141971095088142685‧2^9+1)$','2'],
	['115792089237316195423570985008687907853____269984665640564039457584007913129639937\n$F_{8}$','78','1238926361552897（16位）____×93461639715357977769163558199606896584051237541638188580280321（62位）'+br+'$=(604944512477‧2^{11}+1) \\\\ (【59位数】‧2^{11}+1)$','2'],
	['134078079299425970995740249982058461274____793658205923933777235614437217640300735____469768018742981669034276900318581864860____50853753882811946569946433649006084097\n$F_{9}$','155','2424833____×7455602825647884208337395736200454918783366342657（49位）____×7416400626275308015247871419019374740599407810975____19023905821316144415759504705008092818711693940737（99位）'+br+'$=(37‧2^{16}+1) \\\\ (3640431067210880961102244011816628378312190597‧2^{11}+1) \\\\ (【96位数】‧2^{11}+1)$','3'],
	['179769313486231590772930519078902473361____797697894230657273430081157732675805500____963132708477322407536021120113879871393____357658789768814416622492847430639474124____377767893424865485276302219601246094119____453082952085005768838150682342462881473____913110540827237163350510684586298239947____245938479716304835356329624224137217\n$F_{10}$','309','45592577____×6487031809____×4659775785220018543264560743076778192897（40位）____×130439874405488189727484...806217820753127014424577（252位）'+br+'$=(11131‧2^{12}+1) \\\\ (395937‧2^{14}+1) \\\\ (1137640572563481089664199400165229051‧2^{12}+1) \\\\ (【248位数】‧2^{13}+1)$','4'],
	['323170060713110073007148766886699519604____441026697154840321303454275246551388678____908931972014115229134636887179609218980____194941195591504909210950881523864482831____206308773673009960917501977503896521067____960576383840675682767922186426197561618____380943384761704705816458520363050428875____758915410658086075523991239303855219143____333896683424206849747865645694948561760____353263220580778056593310261927084603141____502585928641771167259436037184618573575____983511523016459044036976132332872312271____256847108202097251571017269313234696785____425806566979350459972683529986382155251____663894373355436021354332296046453184786____04952148193555853611059596230657\n$F_{11}$','617','319489____×974849____×167988556341760475137（21位）____×3560841906445833920513（22位）____×173462447179147555430258...491382441723306598834177（564位）'+br+'$=(39‧2^{13}+1) \\\\ (119‧2^{13}+1) \\\\ (10253207784531279‧2^{14}+1) \\\\ (434673084282938711‧2^{13}+1) \\\\ (【560位数】‧2^{13}+1)$','5'],
	['104438888141315250669175271071662438257____996424904738378038423348328395390797155____745684882681193499755834089010671443926____283798757343818579360726323608785136527____794595697654370999834036159013438371831____442807001185594622637631883939771274567____233468434458661749680790870580370407128____404874011860911446797778359802900668693____897688178778594690563019026094059957945____343282346930302669644305902501597239986____771421554169383555988529148631823791443____449673408781187263949647510018904134900____841706167509366833385055103297208826955____076998361636941193301521379682583718809____183365675122131849284636812555022599830____041234478486259567449219461702380650591____324561082573183538008760862210283427019____769820231316901767800667519548507992163____641937028537512478401490715913545998279____051339961155179427110683113409058427288____427979155484978295432353451706522326906____139490598769300212296339568778287894844____061600741294567491982305057164237715481____632138063104590291613692670834285644073____044789997190178146576347322385026725305____989979599609079946920177462481771844986____745565925017832907047311943316555080756____822184657174637329688491281952031745700____244092661691087414838507841192980452298____185733897764810312608590300130241346718____972667321649151113160292078173803343609____0243804708340403154190337\n$F_{32}$','1234','114689____×26017793____×63766529____×190274191361____×1256132134125569____×568630647535356955169033410940867804839360742060818433（54位）____×C1133（1133位）'+br+'$=(7‧2^{14}+1) \\\\ (397‧2^{16}+1) \\\\ (973‧2^{16}+1) \\\\ (11613415‧2^{14}+1) \\\\ (76668221077‧2^{14}+1) \\\\ (17353230210429594579133099699123162989482444520899‧2^{15}+1)$','7+'],

	['F_{13}','','2710954639361____×2663848877152141313____×3603109844542291969____×319546020820551643220672513____×C2391（2391位）'+br+'$=(41365885‧2^{16}+1) \\\\ (20323554055421‧2^{17}+1) \\\\ (6872386635861‧2^{19}+1) \\\\ (609485665932753836099‧2^{19}+1) \\\\ (⋯)$','5+'],
	['F_{14}','','116928085873074369829035993834596371340386703423373313____×C4880（4880位）'+br+'$=(1784180997819127957596374417642156545110881094717‧2^{16}+1) \\\\ (⋯)$','2+'],
	['F_{15}','','1214251009____×2327042503868417____×168768817029516972383024127016961____×C9808（9808位）'+br+'$=(579‧2^{21}+1) \\\\ (17753925353‧2^{17}+1) \\\\ (1287603889690528658928101555‧2^{17}+1) \\\\ (⋯)$','4+'],
	['F_{16}','','825753601____×188981757975021318420037633____×C19694（19694位）'+br+'$=(1575‧2^{19}+1) \\\\ (180227048850079840107‧2^{20}+1) \\\\ (⋯)$','3+'],
	['F_{17}','','31065037602817____×7751061099802522589358967058392886922693580423169____×C39395'+br+'$=(59251857‧2^{19}+1) \\\\ (14783975791554494074552473179612897725474511‧2^{19}+1) \\\\ (⋯)$','3+'],
	['F_{18}','','13631489____×81274690703860512587777____×C78884'+br+'$=(13‧2^{20}+1) \\\\ (9688698137266697‧2^{23}+1) \\\\ (⋯)$','3+'],
	['F_{19}','','70525124609____×646730219521____×37590055514133754286524446080499713____×C157770'+br+'$=(33629‧2^{21}+1) \\\\ (308385‧2^{21}+1) \\\\ (8962167624028624126082526703‧2^{22}+1) \\\\ (⋯)$','4+'],

	['F_{20}','315653','未知 \\\\ 猜测：(?[3579]‧2^{22}+1) \\\\ 或(?[5791]‧2^{23}+1)','未知'],
	['F_{21}','','4485296422913____×C631294'+br+'$=(534689‧2^{23}+1) \\\\ (⋯)$','2+'],
	['F_{22}','','64658705994591851009055774868504577____×C1262577'+br+'$=(3853959202444067657533632211‧2^{24}+1) \\\\ (⋯)$','2+'],
	['F_{23}','','167772161____×C2525215'+br+'$=(5‧2^{25}+1) \\\\ (⋯)$','2+'],

	['F_{24}','5050446','未知 \\\\ 猜测：(?[3579]‧2^{26}+1) \\\\ 或(?[5791]‧2^{27}+1)','未知'],
	['F_{25}','',br+'$=(48413‧2^{29}+1) \\\\ (1522849979‧2^{27}+1) \\\\ (16168301139‧2^{27}+1) \\\\ (⋯)$',''],
	['F_{26}','',br+'$=(143165‧2^{29}+1) \\\\ (⋯)$',''],
	['F_{27}','',br+'$=(141015‧2^{30}+1) \\\\ (430816215‧2^{29}+1) \\\\ (⋯)$',''],
	['F_{28}','',br+'$=(25709319373‧2^{36}+1) \\\\ (⋯)$',''],
	['F_{29}','',br+'$=(1120049‧2^{31}+1) \\\\ (⋯)$',''],
	['F_{30}','',br+'$=(149041‧2^{32}+1) \\\\ (127589‧2^{33}+1) \\\\ (⋯)$',''],

	['F_{31}','',br+'$=(5463561471303‧2^{33}+1) \\\\ (⋯)$',''],
	['F_{32}','',br+'$=(1479‧2^{34}+1) \\\\ (⋯)$',''],

/*
http://www.prothsearch.com/fermat.html#Summary js脚本提取：
	var a=[];$('#Q1 tr:gt(12)').each(function(){var t=$(this),tds=t.children(),i=tds.eq(0).text().trim(),j=tds.eq(2).text().trim(),k=tds.eq(4).text().trim();if(!j){return true} var s="("+j+"‧2^{"+k+"}+1)";if(i){a.push("['F_{"+i+"}','',br+'$="+s)}else{a[a.length-1]+=s}});return a.join("(⋯)$',''],____")
	*/

['F_{36}','',br+'$=(5‧2^{39}+1) \\\\ (3759613‧2^{38}+1) \\\\ (⋯)$',''],
['F_{37}','',br+'$=(1275438465‧2^{39}+1) \\\\ (⋯)$',''],
['F_{38}','',br+'$=(3‧2^{41}+1) \\\\ (2653‧2^{40}+1) \\\\ (⋯)$',''],
['F_{39}','',br+'$=(21‧2^{41}+1) \\\\ (2864929972774011‧2^{41}+1) \\\\ (⋯)$',''],
['F_{42}','',br+'$=(43485‧2^{45}+1) \\\\ (111318179143061‧2^{45}+1) \\\\ (⋯)$',''],
['F_{43}','',br+'$=(212675402445‧2^{45}+1) \\\\ (⋯)$',''],
['F_{48}','',br+'$=(2139543641769‧2^{50}+1) \\\\ (⋯)$',''],
['F_{52}','',br+'$=(4119‧2^{54}+1) \\\\ (21626655‧2^{54}+1) \\\\ (81909357657279‧2^{54}+1) \\\\ (⋯)$',''],
['F_{55}','',br+'$=(29‧2^{57}+1) \\\\ (⋯)$',''],
['F_{58}','',br+'$=(95‧2^{61}+1) \\\\ (⋯)$',''],
['F_{61}','',br+'$=(54985063‧2^{66}+1) \\\\ (⋯)$',''],
['F_{62}','',br+'$=(697‧2^{64}+1) \\\\ (⋯)$',''],
['F_{63}','',br+'$=(9‧2^{67}+1) \\\\ (⋯)$',''],
['F_{64}','',br+'$=(17853639‧2^{67}+1) \\\\ (⋯)$',''],
['F_{65}','',br+'$=(1210895760431083‧2^{68}+1) \\\\ (⋯)$',''],
['F_{66}','',br+'$=(7551‧2^{69}+1) \\\\ (⋯)$',''],
['F_{71}','',br+'$=(683‧2^{73}+1) \\\\ (⋯)$',''],
['F_{72}','',br+'$=(76432329‧2^{74}+1) \\\\ (⋯)$',''],
['F_{73}','',br+'$=(5‧2^{75}+1) \\\\ (⋯)$',''],
['F_{75}','',br+'$=(3447431‧2^{77}+1) \\\\ (⋯)$',''],
['F_{77}','',br+'$=(425‧2^{79}+1) \\\\ (5940341195‧2^{79}+1) \\\\ (⋯)$',''],
['F_{81}','',br+'$=(271‧2^{84}+1) \\\\ (⋯)$',''],
['F_{83}','',br+'$=(1595863660157‧2^{87}+1) \\\\ (⋯)$',''],
['F_{86}','',br+'$=(20018578522347‧2^{88}+1) \\\\ (⋯)$',''],
['F_{88}','',br+'$=(119942751127‧2^{90}+1) \\\\ (⋯)$',''],
['F_{90}','',br+'$=(198922467387‧2^{92}+1) \\\\ (⋯)$',''],
['F_{91}','',br+'$=(1421‧2^{93}+1) \\\\ (⋯)$',''],
['F_{93}','',br+'$=(92341‧2^{96}+1) \\\\ (⋯)$',''],
['F_{94}','',br+'$=(482524552001‧2^{97}+1) \\\\ (⋯)$',''],
['F_{96}','',br+'$=(3334131633063‧2^{101}+1) \\\\ (⋯)$',''],
['F_{99}','',br+'$=(16233‧2^{104}+1) \\\\ (⋯)$',''],
['F_{107}','',br+'$=(1289179925‧2^{111}+1) \\\\ (⋯)$',''],
['F_{116}','',br+'$=(3433149787‧2^{120}+1) \\\\ (⋯)$',''],
['F_{117}','',br+'$=(7‧2^{120}+1) \\\\ (⋯)$',''],
['F_{118}','',br+'$=(1527888802614951‧2^{120}+1) \\\\ (⋯)$',''],
['F_{122}','',br+'$=(5234775‧2^{124}+1) \\\\ (⋯)$',''],
['F_{125}','',br+'$=(5‧2^{127}+1) \\\\ (⋯)$',''],
['F_{132}','',br+'$=(1075441212722595‧2^{135}+1) \\\\ (⋯)$',''],
['F_{133}','',br+'$=(88075576149‧2^{135}+1) \\\\ (⋯)$',''],
['F_{142}','',br+'$=(8152599‧2^{145}+1) \\\\ (⋯)$',''],
['F_{144}','',br+'$=(17‧2^{147}+1) \\\\ (⋯)$',''],
['F_{146}','',br+'$=(37092477‧2^{148}+1) \\\\ (⋯)$',''],
['F_{147}','',br+'$=(3125‧2^{149}+1) \\\\ (124567335‧2^{149}+1) \\\\ (⋯)$',''],
['F_{150}','',br+'$=(1575‧2^{157}+1) \\\\ (5439‧2^{154}+1) \\\\ (⋯)$',''],
['F_{164}','',br+'$=(1835601567‧2^{167}+1) \\\\ (⋯)$',''],
['F_{166}','',br+'$=(2674670937447‧2^{171}+1) \\\\ (⋯)$',''],
['F_{172}','',br+'$=(20569603303‧2^{174}+1) \\\\ (⋯)$',''],
['F_{178}','',br+'$=(313047661‧2^{180}+1) \\\\ (⋯)$',''],
['F_{184}','',br+'$=(117012935‧2^{187}+1) \\\\ (⋯)$',''],
['F_{195}','',br+'$=(48595346636925‧2^{197}+1) \\\\ (⋯)$',''],
['F_{201}','',br+'$=(4845‧2^{204}+1) \\\\ (⋯)$',''],
['F_{205}','',br+'$=(232905‧2^{207}+1) \\\\ (⋯)$',''],
['F_{207}','',br+'$=(3‧2^{209}+1) \\\\ (⋯)$',''],
['F_{215}','',br+'$=(32111‧2^{217}+1) \\\\ (⋯)$',''],
['F_{226}','',br+'$=(15‧2^{229}+1) \\\\ (⋯)$',''],
['F_{228}','',br+'$=(29‧2^{231}+1) \\\\ (⋯)$',''],
['F_{230}','',br+'$=(372236097‧2^{232}+1) \\\\ (⋯)$',''],
['F_{232}','',br+'$=(70899775‧2^{236}+1) \\\\ (⋯)$',''],
['F_{250}','',br+'$=(403‧2^{252}+1) \\\\ (⋯)$',''],
['F_{251}','',br+'$=(85801657‧2^{254}+1) \\\\ (⋯)$',''],
['F_{255}','',br+'$=(629‧2^{257}+1) \\\\ (⋯)$',''],
['F_{256}','',br+'$=(36986355‧2^{258}+1) \\\\ (⋯)$',''],
['F_{259}','',br+'$=(36654265‧2^{262}+1) \\\\ (⋯)$',''],
['F_{267}','',br+'$=(177‧2^{271}+1) \\\\ (⋯)$',''],
['F_{268}','',br+'$=(21‧2^{276}+1) \\\\ (⋯)$',''],
['F_{274}','',br+'$=(58130105122923‧2^{277}+1) \\\\ (⋯)$',''],
['F_{275}','',br+'$=(22347‧2^{279}+1) \\\\ (⋯)$',''],
['F_{284}','',br+'$=(7‧2^{290}+1) \\\\ (1061341513‧2^{286}+1) \\\\ (⋯)$',''],
['F_{286}','',br+'$=(78472588395‧2^{288}+1) \\\\ (⋯)$',''],
['F_{287}','',br+'$=(5915‧2^{289}+1) \\\\ (8662575142599‧2^{289}+1) \\\\ (21346190509623‧2^{290}+1) \\\\ (⋯)$',''],
['F_{297}','',br+'$=(72677552745‧2^{301}+1) \\\\ (⋯)$',''],
['F_{298}','',br+'$=(247‧2^{302}+1) \\\\ (⋯)$',''],
['F_{299}','',br+'$=(272392805475‧2^{304}+1) \\\\ (⋯)$',''],
['F_{301}','',br+'$=(7183437‧2^{304}+1) \\\\ (⋯)$',''],
['F_{316}','',br+'$=(7‧2^{320}+1) \\\\ (⋯)$',''],
['F_{329}','',br+'$=(1211‧2^{333}+1) \\\\ (⋯)$',''],
['F_{334}','',br+'$=(27609‧2^{341}+1) \\\\ (⋯)$',''],
['F_{338}','',br+'$=(27654487‧2^{342}+1) \\\\ (⋯)$',''],
['F_{343}','',br+'$=(4844391185‧2^{345}+1) \\\\ (⋯)$',''],
['F_{353}','',br+'$=(18908555‧2^{355}+1) \\\\ (⋯)$',''],
['F_{370}','',br+'$=(573230511‧2^{373}+1) \\\\ (⋯)$',''],
['F_{375}','',br+'$=(733251‧2^{377}+1) \\\\ (⋯)$',''],
['F_{376}','',br+'$=(810373‧2^{378}+1) \\\\ (⋯)$',''],
['F_{380}','',br+'$=(321116871‧2^{385}+1) \\\\ (⋯)$',''],
['F_{398}','',br+'$=(120845‧2^{401}+1) \\\\ (⋯)$',''],
['F_{416}','',br+'$=(8619‧2^{418}+1) \\\\ (38039‧2^{419}+1) \\\\ (⋯)$',''],
['F_{417}','',br+'$=(118086729‧2^{421}+1) \\\\ (303472680883‧2^{420}+1) \\\\ (⋯)$',''],
['F_{431}','',br+'$=(5769285‧2^{434}+1) \\\\ (⋯)$',''],
['F_{452}','',br+'$=(27‧2^{455}+1) \\\\ (⋯)$',''],
['F_{459}','',br+'$=(5449229488169‧2^{465}+1) \\\\ (⋯)$',''],
['F_{468}','',br+'$=(27114089‧2^{471}+1) \\\\ (⋯)$',''],
['F_{480}','',br+'$=(5673968845‧2^{484}+1) \\\\ (⋯)$',''],
['F_{517}','',br+'$=(84977118993‧2^{520}+1) \\\\ (⋯)$',''],
['F_{544}','',br+'$=(225‧2^{547}+1) \\\\ (⋯)$',''],
['F_{547}','',br+'$=(77377‧2^{550}+1) \\\\ (⋯)$',''],
['F_{556}','',br+'$=(127‧2^{558}+1) \\\\ (⋯)$',''],
['F_{569}','',br+'$=(6616590375‧2^{575}+1) \\\\ (⋯)$',''],
['F_{579}','',br+'$=(63856313‧2^{581}+1) \\\\ (⋯)$',''],
['F_{600}','',br+'$=(6213186413‧2^{605}+1) \\\\ (⋯)$',''],
['F_{620}','',br+'$=(10084141‧2^{624}+1) \\\\ (⋯)$',''],
['F_{635}','',br+'$=(4258979‧2^{645}+1) \\\\ (⋯)$',''],
['F_{637}','',br+'$=(11969‧2^{643}+1) \\\\ (⋯)$',''],
['F_{642}','',br+'$=(52943971‧2^{644}+1) \\\\ (⋯)$',''],
['F_{666}','',br+'$=(217924552867‧2^{668}+1) \\\\ (⋯)$',''],
['F_{667}','',br+'$=(491628159‧2^{669}+1) \\\\ (⋯)$',''],
['F_{692}','',br+'$=(717‧2^{695}+1) \\\\ (⋯)$',''],
['F_{723}','',br+'$=(554815‧2^{730}+1) \\\\ (⋯)$',''],
['F_{744}','',br+'$=(17‧2^{747}+1) \\\\ (⋯)$',''],
['F_{851}','',br+'$=(497531‧2^{859}+1) \\\\ (⋯)$',''],
['F_{885}','',br+'$=(16578999‧2^{887}+1) \\\\ (⋯)$',''],
['F_{906}','',br+'$=(57063‧2^{908}+1) \\\\ (⋯)$',''],
['F_{931}','',br+'$=(1985‧2^{933}+1) \\\\ (⋯)$',''],
['F_{943}','',br+'$=(4785972759‧2^{954}+1) \\\\ (⋯)$',''],
['F_{971}','',br+'$=(541664191‧2^{976}+1) \\\\ (⋯)$',''],
['F_{1069}','',br+'$=(137883‧2^{1073}+1) \\\\ (⋯)$',''],
['F_{1082}','',br+'$=(82165‧2^{1084}+1) \\\\ (⋯)$',''],
['F_{1114}','',br+'$=(11618577‧2^{1116}+1) \\\\ (⋯)$',''],
['F_{1123}','',br+'$=(25835‧2^{1125}+1) \\\\ (⋯)$',''],
['F_{1132}','',br+'$=(10111717305‧2^{1136}+1) \\\\ (⋯)$',''],
['F_{1160}','',br+'$=(2018719057‧2^{1162}+1) \\\\ (⋯)$',''],
['F_{1201}','',br+'$=(837747239‧2^{1203}+1) \\\\ (⋯)$',''],
['F_{1225}','',br+'$=(79707‧2^{1231}+1) \\\\ (⋯)$',''],
['F_{1229}','',br+'$=(29139‧2^{1233}+1) \\\\ (⋯)$',''],
['F_{1296}','',br+'$=(58951871175‧2^{1299}+1) \\\\ (⋯)$',''],
['F_{1394}','',br+'$=(62705223‧2^{1396}+1) \\\\ (⋯)$',''],
['F_{1451}','',br+'$=(13143‧2^{1454}+1) \\\\ (⋯)$',''],
['F_{1551}','',br+'$=(291‧2^{1553}+1) \\\\ (⋯)$',''],
['F_{1598}','',br+'$=(10923781‧2^{1600}+1) \\\\ (⋯)$',''],
['F_{1680}','',br+'$=(26778342591‧2^{1683}+1) \\\\ (⋯)$',''],
['F_{1710}','',br+'$=(351276975‧2^{1719}+1) \\\\ (⋯)$',''],
['F_{1722}','',br+'$=(364182745‧2^{1724}+1) \\\\ (⋯)$',''],
['F_{1849}','',br+'$=(98855‧2^{1851}+1) \\\\ (⋯)$',''],
['F_{1945}','',br+'$=(5‧2^{1947}+1) \\\\ (⋯)$',''],
['F_{1990}','',br+'$=(150863‧2^{1993}+1) \\\\ (⋯)$',''],
['F_{2023}','',br+'$=(29‧2^{2027}+1) \\\\ (⋯)$',''],
['F_{2059}','',br+'$=(591909‧2^{2063}+1) \\\\ (⋯)$',''],
['F_{2089}','',br+'$=(431‧2^{2099}+1) \\\\ (⋯)$',''],
['F_{2123}','',br+'$=(9659599821‧2^{2125}+1) \\\\ (⋯)$',''],
['F_{2286}','',br+'$=(4004779405‧2^{2288}+1) \\\\ (⋯)$',''],
['F_{2420}','',br+'$=(103257279‧2^{2422}+1) \\\\ (⋯)$',''],
['F_{2456}','',br+'$=(85‧2^{2458}+1) \\\\ (⋯)$',''],
['F_{2587}','',br+'$=(15249465809‧2^{2591}+1) \\\\ (⋯)$',''],
['F_{2606}','',br+'$=(238451805‧2^{2608}+1) \\\\ (⋯)$',''],
['F_{3056}','',br+'$=(3370842847‧2^{3058}+1) \\\\ (⋯)$',''],
['F_{3310}','',br+'$=(5‧2^{3313}+1) \\\\ (⋯)$',''],
['F_{3314}','',br+'$=(406860969‧2^{3322}+1) \\\\ (⋯)$',''],
['F_{3335}','',br+'$=(43714055‧2^{3337}+1) \\\\ (⋯)$',''],
['F_{3506}','',br+'$=(501‧2^{3508}+1) \\\\ (⋯)$',''],
['F_{3576}','',br+'$=(1132007355‧2^{3578}+1) \\\\ (⋯)$',''],
['F_{3703}','',br+'$=(262254673‧2^{3706}+1) \\\\ (⋯)$',''],
['F_{3723}','',br+'$=(13308899‧2^{3725}+1) \\\\ (⋯)$',''],
['F_{3730}','',br+'$=(1127899657‧2^{3732}+1) \\\\ (⋯)$',''],
['F_{3850}','',br+'$=(787703529‧2^{3854}+1) \\\\ (⋯)$',''],
['F_{4184}','',br+'$=(465917283‧2^{4189}+1) \\\\ (⋯)$',''],
['F_{4250}','',br+'$=(173373‧2^{4252}+1) \\\\ (⋯)$',''],
['F_{4258}','',br+'$=(1435‧2^{4262}+1) \\\\ (⋯)$',''],
['F_{4260}','',br+'$=(209161375‧2^{4262}+1) \\\\ (⋯)$',''],
['F_{4265}','',br+'$=(72179955‧2^{4269}+1) \\\\ (⋯)$',''],
['F_{4332}','',br+'$=(2466157‧2^{4334}+1) \\\\ (⋯)$',''],
['F_{4652}','',br+'$=(143918649‧2^{4654}+1) \\\\ (⋯)$',''],
['F_{4724}','',br+'$=(29‧2^{4727}+1) \\\\ (⋯)$',''],
['F_{5199}','',br+'$=(1488947679‧2^{5201}+1) \\\\ (⋯)$',''],
['F_{5320}','',br+'$=(21341‧2^{5323}+1) \\\\ (⋯)$',''],
['F_{5531}','',br+'$=(1503975‧2^{5533}+1) \\\\ (⋯)$',''],
['F_{5792}','',br+'$=(8872947‧2^{5794}+1) \\\\ (⋯)$',''],
['F_{5957}','',br+'$=(421435‧2^{5960}+1) \\\\ (⋯)$',''],
['F_{6208}','',br+'$=(763‧2^{6210}+1) \\\\ (⋯)$',''],
['F_{6355}','',br+'$=(115185‧2^{6358}+1) \\\\ (⋯)$',''],
['F_{6390}','',br+'$=(303‧2^{6393}+1) \\\\ (⋯)$',''],
['F_{6537}','',br+'$=(17‧2^{6539}+1) \\\\ (⋯)$',''],
['F_{6835}','',br+'$=(19‧2^{6838}+1) \\\\ (⋯)$',''],
['F_{6909}','',br+'$=(6021‧2^{6912}+1) \\\\ (⋯)$',''],
['F_{7137}','',br+'$=(118807331‧2^{7139}+1) \\\\ (⋯)$',''],
['F_{7181}','',br+'$=(168329‧2^{7187}+1) \\\\ (⋯)$',''],
['F_{7309}','',br+'$=(145‧2^{7312}+1) \\\\ (⋯)$',''],
['F_{8239}','',br+'$=(7473‧2^{8242}+1) \\\\ (⋯)$',''],
['F_{8269}','',br+'$=(592131‧2^{8271}+1) \\\\ (⋯)$',''],
['F_{8298}','',br+'$=(1054057‧2^{8300}+1) \\\\ (⋯)$',''],
['F_{8555}','',br+'$=(645‧2^{8557}+1) \\\\ (⋯)$',''],
['F_{9322}','',br+'$=(8247‧2^{9324}+1) \\\\ (⋯)$',''],
['F_{9428}','',br+'$=(9‧2^{9431}+1) \\\\ (⋯)$',''],
['F_{9447}','',br+'$=(5505161‧2^{9449}+1) \\\\ (⋯)$',''],
['F_{9448}','',br+'$=(19‧2^{9450}+1) \\\\ (⋯)$',''],
['F_{9549}','',br+'$=(1211‧2^{9551}+1) \\\\ (⋯)$',''],
['F_{9552}','',br+'$=(60567741‧2^{9555}+1) \\\\ (⋯)$',''],
['F_{9691}','',br+'$=(260435‧2^{9693}+1) \\\\ (⋯)$',''],
['F_{9747}','',br+'$=(44670651‧2^{9749}+1) \\\\ (⋯)$',''],

['F_{9863}','',br+'$=(332436749‧2^{9865}+1) \\\\ (⋯)$',''],

['F_{11075}','',br+'$=(171369935‧2^{11077}+1) \\\\ (⋯)$',''],
['F_{11695}','',br+'$=(203355‧2^{11703}+1) \\\\ (⋯)$',''],
['F_{12185}','',br+'$=(81‧2^{12189}+1) \\\\ (⋯)$',''],
['F_{12825}','',br+'$=(1814649‧2^{12827}+1) \\\\ (⋯)$',''],
['F_{13250}','',br+'$=(351‧2^{13252}+1) \\\\ (⋯)$',''],
['F_{13623}','',br+'$=(48265‧2^{13626}+1) \\\\ (⋯)$',''],
['F_{14252}','',br+'$=(1173‧2^{14254}+1) \\\\ (⋯)$',''],
['F_{14276}','',br+'$=(157‧2^{14280}+1) \\\\ (⋯)$',''],
['F_{14528}','',br+'$=(17217‧2^{14530}+1) \\\\ (⋯)$',''],
['F_{14587}','',br+'$=(24142479‧2^{14590}+1) \\\\ (⋯)$',''],
['F_{15161}','',br+'$=(55‧2^{15164}+1) \\\\ (⋯)$',''],
['F_{17748}','',br+'$=(3860269‧2^{17750}+1) \\\\ (⋯)$',''],
['F_{17906}','',br+'$=(135‧2^{17909}+1) \\\\ (⋯)$',''],
['F_{18345}','',br+'$=(15071297‧2^{18347}+1) \\\\ (⋯)$',''],
['F_{18749}','',br+'$=(11‧2^{18759}+1) \\\\ (⋯)$',''],
['F_{18757}','',br+'$=(33‧2^{18766}+1) \\\\ (⋯)$',''],
['F_{18933}','',br+'$=(15175951‧2^{18936}+1) \\\\ (⋯)$',''],
['F_{19211}','',br+'$=(13323‧2^{19220}+1) \\\\ (⋯)$',''],
['F_{22296}','',br+'$=(4777‧2^{22298}+1) \\\\ (⋯)$',''],
['F_{23069}','',br+'$=(681‧2^{23071}+1) \\\\ (⋯)$',''],
['F_{23288}','',br+'$=(19‧2^{23290}+1) \\\\ (⋯)$',''],
['F_{23471}','',br+'$=(5‧2^{23473}+1) \\\\ (⋯)$',''],
['F_{24651}','',br+'$=(99‧2^{24653}+1) \\\\ (⋯)$',''],
['F_{25006}','',br+'$=(57‧2^{25010}+1) \\\\ (⋯)$',''],
['F_{28281}','',br+'$=(81‧2^{28285}+1) \\\\ (⋯)$',''],
['F_{30256}','',br+'$=(121531‧2^{30260}+1) \\\\ (⋯)$',''],
['F_{35563}','',br+'$=(357‧2^{35567}+1) \\\\ (⋯)$',''],
['F_{37236}','',br+'$=(1844383‧2^{37238}+1) \\\\ (⋯)$',''],
['F_{38795}','',br+'$=(1514535‧2^{38797}+1) \\\\ (⋯)$',''],
['F_{38967}','',br+'$=(177795‧2^{38969}+1) \\\\ (⋯)$',''],
['F_{41894}','',br+'$=(4935‧2^{41897}+1) \\\\ (⋯)$',''],
['F_{43665}','',br+'$=(2495‧2^{43667}+1) \\\\ (⋯)$',''],
['F_{45278}','',br+'$=(547653‧2^{45280}+1) \\\\ (⋯)$',''],
['F_{48624}','',br+'$=(28949‧2^{48627}+1) \\\\ (⋯)$',''],
['F_{49093}','',br+'$=(165‧2^{49095}+1) \\\\ (⋯)$',''],
['F_{49488}','',br+'$=(71007‧2^{49490}+1) \\\\ (⋯)$',''],
['F_{50078}','',br+'$=(7619‧2^{50081}+1) \\\\ (⋯)$',''],
['F_{60079}','',br+'$=(5731‧2^{60084}+1) \\\\ (⋯)$',''],
['F_{63480}','',br+'$=(242445‧2^{63484}+1) \\\\ (⋯)$',''],
['F_{63679}','',br+'$=(169‧2^{63686}+1) \\\\ (⋯)$',''],
['F_{79221}','',br+'$=(6089‧2^{79223}+1) \\\\ (⋯)$',''],
['F_{83861}','',br+'$=(99‧2^{83863}+1) \\\\ (⋯)$',''],
['F_{90057}','',br+'$=(189‧2^{90061}+1) \\\\ (⋯)$',''],
['F_{91213}','',br+'$=(585‧2^{91215}+1) \\\\ (⋯)$',''],
['F_{94798}','',br+'$=(21‧2^{94801}+1) \\\\ (⋯)$',''],
['F_{95328}','',br+'$=(7‧2^{95330}+1) \\\\ (⋯)$',''],
['F_{100518}','',br+'$=(79425‧2^{100520}+1) \\\\ (⋯)$',''],
['F_{104448}','',br+'$=(927‧2^{104451}+1) \\\\ (⋯)$',''],
['F_{106432}','',br+'$=(30967‧2^{106436}+1) \\\\ (⋯)$',''],
['F_{113547}','',br+'$=(39‧2^{113549}+1) \\\\ (⋯)$',''],
['F_{114293}','',br+'$=(13‧2^{114296}+1) \\\\ (⋯)$',''],
['F_{125410}','',br+'$=(5‧2^{125413}+1) \\\\ (⋯)$',''],
['F_{134995}','',br+'$=(47893‧2^{134998}+1) \\\\ (⋯)$',''],
['F_{138557}','',br+'$=(7333‧2^{138560}+1) \\\\ (⋯)$',''],
['F_{142460}','',br+'$=(159‧2^{142462}+1) \\\\ (⋯)$',''],
['F_{146221}','',br+'$=(57‧2^{146223}+1) \\\\ (⋯)$',''],
['F_{157167}','',br+'$=(3‧2^{157169}+1) \\\\ (⋯)$',''],
['F_{213319}','',br+'$=(3‧2^{213321}+1) \\\\ (⋯)$',''],
['F_{221670}','',br+'$=(3771‧2^{221676}+1) \\\\ (⋯)$',''],
['F_{226614}','',br+'$=(4479‧2^{226618}+1) \\\\ (⋯)$',''],
['F_{270091}','',br+'$=(63‧2^{270094}+1) \\\\ (⋯)$',''],
['F_{282717}','',br+'$=(51‧2^{282719}+1) \\\\ (⋯)$',''],
['F_{287384}','',br+'$=(211‧2^{287388}+1) \\\\ (⋯)$',''],
['F_{303088}','',br+'$=(3‧2^{303093}+1) \\\\ (⋯)$',''],
['F_{338295}','',br+'$=(485‧2^{338297}+1) \\\\ (⋯)$',''],
['F_{352279}','',br+'$=(7905‧2^{352281}+1) \\\\ (⋯)$',''],
['F_{382447}','',br+'$=(3‧2^{382449}+1) \\\\ (⋯)$',''],
['F_{410105}','',br+'$=(1207‧2^{410108}+1) \\\\ (⋯)$',''],
['F_{461076}','',br+'$=(9‧2^{461081}+1) \\\\ (⋯)$',''],
['F_{472097}','',br+'$=(89‧2^{472099}+1) \\\\ (⋯)$',''],
['F_{476624}','',br+'$=(651‧2^{476632}+1) \\\\ (⋯)$',''],
['F_{495728}','',br+'$=(243‧2^{495732}+1) \\\\ (⋯)$',''],
['F_{567233}','',br+'$=(519‧2^{567235}+1) \\\\ (⋯)$',''],
['F_{585042}','',br+'$=(151‧2^{585044}+1) \\\\ (⋯)$',''],
['F_{617813}','',br+'$=(659‧2^{617815}+1) \\\\ (⋯)$',''],
['F_{672005}','',br+'$=(27‧2^{672007}+1) \\\\ (⋯)$',''],
['F_{906108}','',br+'$=(1705‧2^{906110}+1) \\\\ (⋯)$',''],
['F_{960897}','',br+'$=(11‧2^{960901}+1) \\\\ (⋯)$',''],
['F_{1099061}','',br+'$=(2145‧2^{1099064}+1) \\\\ (⋯)$',''],
['F_{1246013}','',br+'$=(329‧2^{1246017}+1) \\\\ (⋯)$',''],
['F_{1494096}','',br+'$=(131‧2^{1494099}+1) \\\\ (⋯)$',''],
['F_{1747656}','',br+'$=(183‧2^{1747660}+1) \\\\ (⋯)$',''],
['F_{2141872}','',br+'$=(25‧2^{2141884}+1) \\\\ (⋯)$',''],
['F_{2145351}','',br+'$=(3‧2^{2145353}+1) \\\\ (⋯)$',''],
['F_{2167797}','',br+'$=(7‧2^{2167800}+1) \\\\ (⋯)$',''],
['F_{2478782}','',br+'$=(3‧2^{2478785}+1) \\\\ (⋯)$',''],
['F_{2543548}','',br+'$=(9‧2^{2543551}+1) \\\\ (⋯)$',''],
['F_{2662088}','',br+'$=(267‧2^{2662090}+1) \\\\ (⋯)$',''],
['F_{2747497}','',br+'$=(57‧2^{2747499}+1) \\\\ (⋯)$',''],
['F_{3329780}','>100万',br+'$=(193‧2^{3329782}+1) \\\\ (⋯)$',''],

['F_{5523858}','>100万',br+'$=(13‧2^{5523860}+1) \\\\ (⋯)$',''],

],'wiki','cnt0').replace(/____/g,br))

)+refer([
	inhref('wiki.html?q=Concept/Number/Integer/Type'),
	inhref('explore.html?q=Problem/Problem List'),
	inhref('wiki.html?q=Formula/Polynomial/Identity'),
	inhref('wiki.html?q=Formula/Sequence/Sum'),
	inhref('wiki.html?q=Concept/Number/Prime/Prime'),
	inhref('wiki.html?q=Formula/Equation/Diophantus'),
]);