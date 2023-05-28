// pages/HUAWEI/HUAWEI_Health.ts
Page({
  data: {
    Distance: 3.02,
    Date: "2023年2月15日",
    Time: "6:57",
    MinSpeed: "7'18",
    MaxSpeed: "5'36",
    WorkOutDuration: "00:19:00",
    AverageSpeed: "6'19''",
    Calorie: "195",
    currentChart: "轨迹",

    IsSettingOpen: true,
    RotuneLine: [{
      points: [
        { latitude: "34.12991117350513", longitude: "108.83094287743018" },
        { latitude: "34.12988098283513", longitude: "108.83079418250031" },
        { latitude: "34.129904206462136", longitude: "108.83051643163162" },
        { latitude: "34.12997155465327", longitude: "108.83035370884909" },
        { latitude: "34.130071706065316", longitude: "108.83024359060096" },
        { latitude: "34.130243269472174", longitude: "108.83016293070705" },
        { latitude: "34.13041586181577", longitude: "108.83021693775413" },
        { latitude: "34.130617905177985", longitude: "108.83035721596616" },
        { latitude: "34.13087130102957", longitude: "108.8304994977907" },
        { latitude: "34.13100831820101", longitude: "108.83060330362389" },
        { latitude: "34.131259128961524", longitude: "108.83074919299452" },
        { latitude: "34.13154447367457", longitude: "108.83071117526333" },
        { latitude: "34.13153750669975", longitude: "108.8307925366064" },
        { latitude: "34.13148206153897", longitude: "108.83090686336413" },
        { latitude: "34.13142400360308", longitude: "108.83096578020718" },
        { latitude: "34.13139352329305", longitude: "108.83100295404074" },
        { latitude: "34.13135433426131", longitude: "108.83105555843451" },
        { latitude: "34.13131920925537", longitude: "108.83112920442431" },
        { latitude: "34.13127071363405", longitude: "108.8311904968923" },
        { latitude: "34.131224267337245", longitude: "108.83124380240986" },
        { latitude: "34.131182175140175", longitude: "108.83129780974582" },
        { latitude: "34.131108151151146", longitude: "108.83140371955676" },
        { latitude: "34.13102686991211", longitude: "108.83148508099612" },
        { latitude: "34.130975778705206", longitude: "108.8314991090133" },
        { latitude: "34.13091075359113", longitude: "108.83153277574047" },
        { latitude: "34.13086665556443", longitude: "108.83154743094622" },
        { latitude: "34.129900043521104", longitude: "108.8309435327892" },
        { latitude: "34.12987885210911", longitude: "108.83081234508325" },
        { latitude: "34.129874207451955", longitude: "108.83076465037107" },
        { latitude: "34.12988349696542", longitude: "108.83066645565839" },
        { latitude: "34.12990933300518", longitude: "108.8305058370845" },
        { latitude: "34.129978713405926", longitude: "108.83039992701674" },
        { latitude: "34.13006260832747", longitude: "108.83031225321054" },
        { latitude: "34.13015317995098", longitude: "108.83021966955016" },
        { latitude: "34.13023446212322", longitude: "108.83019441944043" },
        { latitude: "34.13029223042617", longitude: "108.83019512085741" },
        { latitude: "34.131197649626294", longitude: "108.83078218519972" },
        { latitude: "34.131207206938186", longitude: "108.83086646315746" },
        { latitude: "34.13122549201463", longitude: "108.83099610693068" },
        { latitude: "34.131220557130874", longitude: "108.83108939212048" },
        { latitude: "34.131190076588", longitude: "108.83124380204595" },
        { latitude: "34.13110647303325", longitude: "108.8312971078526" },
        { latitude: "34.131057994657866", longitude: "108.83137496219138" },
        { latitude: "34.13100458109247", longitude: "108.83147035123034" },
        { latitude: "34.130941878402915", longitude: "108.83148718462598" },
        { latitude: "34.1308791755339", longitude: "108.83150401802175" },
        { latitude: "34.130844340619106", longitude: "108.83150401802175" },
        { latitude: "34.129907856085836", longitude: "108.83091064094333" },
        { latitude: "34.12988672936403", longitude: "108.83084180985702" },
        { latitude: "34.12990298593308", longitude: "108.83067628159154" },
        { latitude: "34.129954077795055", longitude: "108.83051075327796" },
        { latitude: "34.13001416867427", longitude: "108.83039362097304" },
        { latitude: "34.130095741111816", longitude: "108.83031436381657" },
        { latitude: "34.13018586766067", longitude: "108.830245060592" },
        { latitude: "34.13027614875524", longitude: "108.83019806755362" },
        { latitude: "34.13119856111233", longitude: "108.83076842546006" },
        { latitude: "34.1312008834112", longitude: "108.83090028701827" },
        { latitude: "34.131203496103694", longitude: "108.83103986405422" },
        { latitude: "34.13119391656759", longitude: "108.83116120447517" },
        { latitude: "34.131152404930425", longitude: "108.83124186469036" },
        { latitude: "34.13107344615595", longitude: "108.83132883695123" },
        { latitude: "34.130977810684364", longitude: "108.8314392694856" },
        { latitude: "34.13090581845525", longitude: "108.83146732508624" },
        { latitude: "34.13084747004764", longitude: "108.83149327635579" },
        { latitude: "34.12991519069658", longitude: "108.83091575994013" },
      ],
      color: "#FF2200AA",
      width: 4,
    }]
  },

  onLoad() {
    // console.log(this.data.RotuneLine);
  },

  onReady() {

  },


  onShow() {

  },

  onHide() {

  },

  onUnload() {

  },

  onPullDownRefresh() {

  },

  onReachBottom() {

  },

  onShareAppMessage() {

  },
  ChooseChart: function (e: any) {
    // console.log(e.currentTarget.id);
    this.setData({
      currentChart: e.currentTarget.id
    })
  },

  SettingData: function () {

  },
  OpenSettingWindow: function () {
    this.setData({
      IsSettingOpen: true
    })
  },
  CloseSettingWindow: function () {
    this.setData({
      IsSettingOpen: false
    })
  },
  SettingDistance: function (e: any) {
    this.setData({
      Distance: e.detail.value
    })
  },
  SettingDate: function (e: any) {
    this.setData({
      Date: e.detail.value
    })
  },
  SettingTime: function (e: any) {
    this.setData({
      Time: e.detail.value
    })
  },
  SettingMaxPace: function (e: any) {
    this.setData({
      MaxSpeed: e.detail.value
    })
  },
  SettingMinPace: function (e: any) {
    this.setData({
      MinSpeed: e.detail.value
    })
  },
  SettingDuration: function (e: any) {
    this.setData({
      WorkOutDuration: e.detail.value
    })
  },
  SettingAveragePace: function (e: any) {
    this.setData({
      AverageSpeed: e.detail.value
    })
  },
  SettingCalorie: function (e: any) {
    this.setData({
      Calorie: e.detail.value
    })
  },
  TestMap: function (e: any) {
    console.log("{latitude:\"" + e.detail.latitude + "\"", ",longitude:\"" + e.detail.longitude + "\"},");
  },
  RoutineA: function () {
    var DetermineRand = parseInt((Math.random() * 10).toFixed(0));
    var Routine = [
      { latitude: "34.12987536425532", longitude: "108.83152277084025" },
      { latitude: "34.12933900958748", longitude: "108.83114223746361" },
      { latitude: "34.129736479301414", longitude: "108.83021016594216" },
      { latitude: "34.129114684563454", longitude: "108.82983603464936" },
      { latitude: "34.129413998383626", longitude: "108.82911285646276" },
      { latitude: "34.12855767207108", longitude: "108.82860784451691" },
      { latitude: "34.127883589969144", longitude: "108.8302676307053" },
      { latitude: "34.12870642734415", longitude: "108.83079052364167" },
      { latitude: "34.12833145623787", longitude: "108.83165453234324" },
      { latitude: "34.12796427819427", longitude: "108.83252391855854" },
    ]
    if (DetermineRand == 0) {
      Routine = [
        { latitude: "34.12990146745335", longitude: "108.83263189907007" },
        { latitude: "34.12949639548834", longitude: "108.83239551633096" },
        { latitude: "34.12986327736654", longitude: "108.83153396398939" },
        { latitude: "34.129966261451884", longitude: "108.83141369922282" },
        { latitude: "34.13002118622839", longitude: "108.83143443450422" },
        { latitude: "34.13007267821264", longitude: "108.83129343435849" },
        { latitude: "34.13022715387902", longitude: "108.83117316962466" },
        { latitude: "34.13084043057027", longitude: "108.83153816725348" },
        { latitude: "34.1311406384964", longitude: "108.83134287981989" },
        { latitude: "34.131215952823965", longitude: "108.83116598013964" },
        { latitude: "34.13123274766821", longitude: "108.83105945967645" },
        { latitude: "34.13123274766821", longitude: "108.83092504105844" },
        { latitude: "34.131213853492234", longitude: "108.83078808634082" },
        { latitude: "34.131134078126834", longitude: "108.83067649362738" },
        { latitude: "34.13099971945915", longitude: "108.8306004076237" },
        { latitude: "34.130905248468906", longitude: "108.83054461128881" },
        { latitude: "34.130810777325", longitude: "108.83044823570356" },
        { latitude: "34.130731001446975", longitude: "108.83044062705972" },
        { latitude: "34.13059244341651", longitude: "108.83032396203794" },
        { latitude: "34.13029616998125", longitude: "108.83016481569177" },
        { latitude: "34.13015367501755", longitude: "108.83018193503892" },
        { latitude: "34.13002744993678", longitude: "108.83025358261125" },
        { latitude: "34.12994347465007", longitude: "108.83034995814398" },
        { latitude: "34.129916182614714", longitude: "108.8304590146978" },
        { latitude: "34.12985136421159", longitude: "108.83065874051181" },
        { latitude: "34.129849264761845", longitude: "108.83086670862178" },
        { latitude: "34.12990962210959", longitude: "108.83095927991394" },
        { latitude: "34.1301153614084", longitude: "108.83109369863166" },
        { latitude: "34.130319202271345", longitude: "108.83122677521555" },
        { latitude: "34.1304409657695", longitude: "108.83130286117569" },
        { latitude: "34.130554331752705", longitude: "108.83137641107601" },
        { latitude: "34.13067399556929", longitude: "108.83146771423685" },
        { latitude: "34.130800219684595", longitude: "108.83153555755257" },
        { latitude: "34.13088393162759", longitude: "108.83154126403565" },
        { latitude: "34.13101435407889", longitude: "108.83146708019285" },
        { latitude: "34.131148450354736", longitude: "108.8313485127344" },
        { latitude: "34.13123242436925", longitude: "108.8312115580294" },
        { latitude: "34.13125131849301", longitude: "108.83104924131112" },
        { latitude: "34.13125341801609", longitude: "108.83082605583354" },
        { latitude: "34.131347626177195", longitude: "108.83075314019482" },
        { latitude: "34.131387513744514", longitude: "108.83076835738109" },
        { latitude: "34.131450494169215", longitude: "108.83073285056969" },
        { latitude: "34.13150297758829", longitude: "108.83076582116882" },
        { latitude: "34.131544964598156", longitude: "108.8307429953677" },
        { latitude: "34.131555461311265", longitude: "108.8307024161827" },
        { latitude: "34.13146518944908", longitude: "108.83061872162227" },
        { latitude: "34.131339228670754", longitude: "108.83056546143416" },
        { latitude: "34.13120303353385", longitude: "108.83057497221012" },
        { latitude: "34.13112719450554", longitude: "108.83058828724984" },
        { latitude: "34.13099913385041", longitude: "108.83058067866398" },
        { latitude: "34.13087778172835", longitude: "108.83051334995469" },
        { latitude: "34.13063819206051", longitude: "108.8303542035253" },
        { latitude: "34.13027919988142", longitude: "108.8301386266553" },
        { latitude: "34.130075301167594", longitude: "108.83025085345594" },
        { latitude: "34.13000031961021", longitude: "108.83030370742699" },
        { latitude: "34.1299163444678", longitude: "108.83039501057328" },
        { latitude: "34.12988275427089", longitude: "108.83052435670697" },
        { latitude: "34.12988039246742", longitude: "108.83069491609854" },
        { latitude: "34.129880654827936", longitude: "108.83082109209931" },
        { latitude: "34.12989298876987", longitude: "108.8309054205514" },
        { latitude: "34.12993917524027", longitude: "108.83097389807085" },
        { latitude: "34.13084767790307", longitude: "108.83153566614374" },
        { latitude: "34.13100512633753", longitude: "108.83147226149822" },
        { latitude: "34.13107204334895", longitude: "108.8314120267828" },
        { latitude: "34.131132924626925", longitude: "108.83132833205548" },
        { latitude: "34.13118540829126", longitude: "108.8311786963693" },
        { latitude: "34.13122555839963", longitude: "108.83102842663175" },
        { latitude: "34.1312147993252", longitude: "108.8308692801262" },
        { latitude: "34.13119590519327", longitude: "108.83076529601317" },
        { latitude: "34.13106128425511", longitude: "108.8306644820907" },
        { latitude: "34.13097311134714", longitude: "108.83060361325875" },
        { latitude: "34.130868143385754", longitude: "108.83052752734216" },
        { latitude: "34.13073935607542", longitude: "108.8304616597826" },
        { latitude: "34.130510525300814", longitude: "108.8302993430425" },
        { latitude: "34.130224671727255", longitude: "108.83018250028135" },
        { latitude: "34.13005655347293", longitude: "108.83025399929693" },
        { latitude: "34.129964180647185", longitude: "108.8303351576161" },
        { latitude: "34.12990329869567", longitude: "108.8304289969783" },
        { latitude: "34.12980646462042", longitude: "108.8304042690429" },
        { latitude: "34.12976867567471", longitude: "108.83037637088137" },
        { latitude: "34.12970359460361", longitude: "108.83033071930095" },
        { latitude: "34.12966160688945", longitude: "108.8303662260688" },
        { latitude: "34.12933593838037", longitude: "108.83114293711742" },
      ]
    }
    else if (DetermineRand == 1) {
      Routine = [
        { latitude: "34.12950893607607", longitude: "108.83239659509525" },
        { latitude: "34.12913368029695", longitude: "108.83319532200358" },
        { latitude: "34.127959506351516", longitude: "108.83249194995233" },
        { latitude: "34.127548504426876", longitude: "108.83224009912249" },
        { latitude: "34.127665738709844", longitude: "108.83346748779968" },
        { latitude: "34.12765799765671", longitude: "108.83397633937943" },
        { latitude: "34.127610641187665", longitude: "108.83446921354152" },
        { latitude: "34.12747832336039", longitude: "108.8348906975798" },
        { latitude: "34.127277967503474", longitude: "108.83539677395675" },
        { latitude: "34.1269710671642", longitude: "108.83603668890203" },
        { latitude: "34.12679809779165", longitude: "108.83645019080018" },
        { latitude: "34.126488454424596", longitude: "108.83710588927704" },
        { latitude: "34.125740387906795", longitude: "108.83886148633371" },
        { latitude: "34.124988159332624", longitude: "108.84055481485188" },
        { latitude: "34.12571389675539", longitude: "108.8410009865944" },
        { latitude: "34.12682894704803", longitude: "108.84164930014344" },
        { latitude: "34.12825677700151", longitude: "108.83828405548059" },
        { latitude: "34.12731247790424", longitude: "108.8376136470738" },
        { latitude: "34.12722745304041", longitude: "108.83758312388306" },
        { latitude: "34.12752378740124", longitude: "108.83693568560727" },
        { latitude: "34.12851869868413", longitude: "108.83750914619714" },
        { latitude: "34.128644412292296", longitude: "108.83738575345694" },
        { latitude: "34.12868893587197", longitude: "108.83724021303624" },
        { latitude: "34.12867845973063", longitude: "108.83715795098601" },
        { latitude: "34.128317032778874", longitude: "108.83689850948383" },
        { latitude: "34.12771465169169", longitude: "108.83647138029687" },
        { latitude: "34.127405138811675", longitude: "108.83630948010159" },
        { latitude: "34.12699394418433", longitude: "108.83605003861749" },
        { latitude: "34.12680537014036", longitude: "108.83645502050422" },
      ]
    }
    else if (DetermineRand == 2) {
      Routine = [
        { latitude: "34.12949502985694", longitude: "108.832403461936" },
        { latitude: "34.12985441889976", longitude: "108.83152989895189" },
        { latitude: "34.129356469395304", longitude: "108.83113234949008" },
        { latitude: "34.12869788249042", longitude: "108.83076773158461" },
        { latitude: "34.12833848823311", longitude: "108.83165698691653" },
        { latitude: "34.127619153964105", longitude: "108.83118751221082" },
        { latitude: "34.12770575573371", longitude: "108.8307219609328" },
        { latitude: "34.127887619446135", longitude: "108.83024071678278" },
        { latitude: "34.12871226400323", longitude: "108.830762127213" },
        { latitude: "34.129094252359906", longitude: "108.8298102113879" },
        { latitude: "34.12973076333553", longitude: "108.83020776105559" },
        { latitude: "34.13004199036401", longitude: "108.82951336836243" },
        { latitude: "34.131636610099285", longitude: "108.83065204308457" },
        { latitude: "34.130988963722444", longitude: "108.83218587796057" },
        { latitude: "34.12986934877938", longitude: "108.83152848183965" },
        { latitude: "34.129132707535604", longitude: "108.83324029840412" },
      ]
    }
    else if (DetermineRand == 3) {
      Routine = [
        { latitude: "34.13001329795929", longitude: "108.83270097799823" },
        { latitude: "34.12949051557591", longitude: "108.83239073972072" },
        { latitude: "34.12985097848091", longitude: "108.8315254669277" },
        { latitude: "34.12933736662909", longitude: "108.83112104944883" },
        { latitude: "34.12869993335928", longitude: "108.83078865151151" },
        { latitude: "34.12832289333577", longitude: "108.83164336217487" },
        { latitude: "34.12947852935128", longitude: "108.83240787767807" },
        { latitude: "34.12989409341925", longitude: "108.83155195265715" },
        { latitude: "34.1309579931537", longitude: "108.83221120847315" },
        { latitude: "34.13165273642925", longitude: "108.8306985449999" },
        { latitude: "34.13159770797398", longitude: "108.83057666583443" },
        { latitude: "34.130051285597794", longitude: "108.8295803125892" },
        { latitude: "34.12973543815307", longitude: "108.83018832372295" },
        { latitude: "34.12908310387569", longitude: "108.82986424536216" },
        { latitude: "34.12869731883885", longitude: "108.83076310500041" },
        { latitude: "34.12788561596996", longitude: "108.83029774790714" },
        { latitude: "34.128497476528516", longitude: "108.82871353686915" },
        { latitude: "34.12885841870412", longitude: "108.82873061936698" },
        { latitude: "34.129417891687", longitude: "108.82911841697114" },
        { latitude: "34.129110067364714", longitude: "108.82980675763201" },
        { latitude: "34.12968788208478", longitude: "108.83024995482367" },
        { latitude: "34.13005474641542", longitude: "108.82955191919973" },
        { latitude: "34.13077872591773", longitude: "108.83012946055771" },
      ]
    }
    else if (DetermineRand == 4) {
      Routine = [
        { latitude: "34.129929847413415", longitude: "108.83265887332402" },
        { latitude: "34.13061312892724", longitude: "108.83305870302763" },
        { latitude: "34.13020698603998", longitude: "108.83392822573944" },
        { latitude: "34.12913534712358", longitude: "108.83323282264848" },
        { latitude: "34.12753313326631", longitude: "108.83224627038476" },
        { latitude: "34.12762900827059", longitude: "108.83116660315409" },
        { latitude: "34.12787358258304", longitude: "108.83025651532796" },
        { latitude: "34.12748918037038", longitude: "108.83003501946541" },
        { latitude: "34.126749232250674", longitude: "108.83173882017547" },
        { latitude: "34.126690217742535", longitude: "108.8318393193382" },
        { latitude: "34.12662015038358", longitude: "108.83181916618491" },
        { latitude: "34.126419957401055", longitude: "108.83188970200786" },
        { latitude: "34.12639993807984", longitude: "108.83164383430221" },
        { latitude: "34.126495029870725", longitude: "108.83141408907534" },
        { latitude: "34.126400454086905", longitude: "108.83133729507972" },
        { latitude: "34.12710094087769", longitude: "108.8297472131701" },
        { latitude: "34.12787908776639", longitude: "108.83025978665535" },
        { latitude: "34.12814649320684", longitude: "108.82961755348481" },
        { latitude: "34.12796215448969", longitude: "108.82947933287869" },
        { latitude: "34.1280702151896", longitude: "108.8292451253451" },
        { latitude: "34.12812449684165", longitude: "108.8290687526727" },
        { latitude: "34.12812449684165", longitude: "108.82897938310623" },
        { latitude: "34.128084130224856", longitude: "108.82888309183431" },
        { latitude: "34.12801445035346", longitude: "108.82875453156907" },
        { latitude: "34.12798277758916", longitude: "108.82873004394742" },
        { latitude: "34.127929567421994", longitude: "108.82871014772695" },
        { latitude: "34.12763295170716", longitude: "108.82872736556521" },
        { latitude: "34.12760634651404", longitude: "108.82869828651155" },
        { latitude: "34.12759747807579", longitude: "108.82865543311607" },
        { latitude: "34.12761394801937", longitude: "108.82856819590484" },
        { latitude: "34.127644208952326", longitude: "108.82850122137825" },
        { latitude: "34.1277164230189", longitude: "108.8283726611196" },
        { latitude: "34.12773162596555", longitude: "108.8283267467882" },
        { latitude: "34.127732892924804", longitude: "108.82827930196186" },
        { latitude: "34.127732892924804", longitude: "108.82821349145047" },
        { latitude: "34.127741761290814", longitude: "108.8281446199145" },
        { latitude: "34.12775189655684", longitude: "108.82807421796679" },
        { latitude: "34.12716739360159", longitude: "108.82768556290944" },
      ]
    }
    else if (DetermineRand == 5) {
      Routine = [
        { latitude: "34.129929847413415", longitude: "108.83265887332402" },
        { latitude: "34.13061312892724", longitude: "108.83305870302763" },
        { latitude: "34.13020698603998", longitude: "108.83392822573944" },
        { latitude: "34.12913534712358", longitude: "108.83323282264848" },
        { latitude: "34.12753313326631", longitude: "108.83224627038476" },
        { latitude: "34.12762900827059", longitude: "108.83116660315409" },
        { latitude: "34.12787358258304", longitude: "108.83025651532796" },
        { latitude: "34.12748918037038", longitude: "108.83003501946541" },
        { latitude: "34.126749232250674", longitude: "108.83173882017547" },
        { latitude: "34.126690217742535", longitude: "108.8318393193382" },
        { latitude: "34.12662015038358", longitude: "108.83181916618491" },
        { latitude: "34.126419957401055", longitude: "108.83188970200786" },
        { latitude: "34.12639993807984", longitude: "108.83164383430221" },
        { latitude: "34.126495029870725", longitude: "108.83141408907534" },
        { latitude: "34.126400454086905", longitude: "108.83133729507972" },
        { latitude: "34.12710094087769", longitude: "108.8297472131701" },
        { latitude: "34.12787908776639", longitude: "108.83025978665535" },
        { latitude: "34.12814649320684", longitude: "108.82961755348481" },
        { latitude: "34.12796215448969", longitude: "108.82947933287869" },
        { latitude: "34.1280702151896", longitude: "108.8292451253451" },
        { latitude: "34.12812449684165", longitude: "108.8290687526727" },
        { latitude: "34.12812449684165", longitude: "108.82897938310623" },
        { latitude: "34.128084130224856", longitude: "108.82888309183431" },
        { latitude: "34.12801445035346", longitude: "108.82875453156907" },
        { latitude: "34.12798277758916", longitude: "108.82873004394742" },
        { latitude: "34.127929567421994", longitude: "108.82871014772695" },
        { latitude: "34.12763295170716", longitude: "108.82872736556521" },
        { latitude: "34.12760634651404", longitude: "108.82869828651155" },
        { latitude: "34.12759747807579", longitude: "108.82865543311607" },
        { latitude: "34.12761394801937", longitude: "108.82856819590484" },
        { latitude: "34.127644208952326", longitude: "108.82850122137825" },
        { latitude: "34.1277164230189", longitude: "108.8283726611196" },
        { latitude: "34.12773162596555", longitude: "108.8283267467882" },
        { latitude: "34.127732892924804", longitude: "108.82827930196186" },
        { latitude: "34.127732892924804", longitude: "108.82821349145047" },
        { latitude: "34.127741761290814", longitude: "108.8281446199145" },
        { latitude: "34.12775189655684", longitude: "108.82807421796679" },
        { latitude: "34.12716739360159", longitude: "108.82768556290944" },
      ]
    }
    else if (DetermineRand == 6) {
      Routine = [
        { latitude: "34.12994408846051", longitude: "108.8326619164178" },
        { latitude: "34.12763784852905", longitude: "108.83121783894603" },
        { latitude: "34.12770333389437", longitude: "108.83070190961416" },
        { latitude: "34.127855432211256", longitude: "108.83024796188363" },
        { latitude: "34.12676459925639", longitude: "108.82953026111727" },
        { latitude: "34.126630392996994", longitude: "108.82945100050028" },
        { latitude: "34.12467674783762", longitude: "108.82822803962995" },
        { latitude: "34.124384468805744", longitude: "108.82801187407006" },
        { latitude: "34.1247306350048", longitude: "108.82723793584103" },
        { latitude: "34.12496624673792", longitude: "108.8273063882848" },
        { latitude: "34.12490100634244", longitude: "108.82760811958497" },
        { latitude: "34.124921883121495", longitude: "108.82776664102516" },
        { latitude: "34.12585165304962", longitude: "108.82830525319616" },
        { latitude: "34.12601568440421", longitude: "108.82822599229041" },
        { latitude: "34.12612901489042", longitude: "108.82812511502152" },
        { latitude: "34.126200592040405", longitude: "108.82798821010954" },
        { latitude: "34.1262095392311", longitude: "108.82781888061152" },
        { latitude: "34.12620655674325", longitude: "108.8276819755963" },
        { latitude: "34.12616480340471", longitude: "108.82752345421807" },
        { latitude: "34.12605743774811", longitude: "108.82739375490473" },
        { latitude: "34.125276049883475", longitude: "108.82692179333208" },
        { latitude: "34.12504640379843", longitude: "108.82702267068339" },
        { latitude: "34.12493008938254", longitude: "108.82717758931392" },
        { latitude: "34.1248495639139", longitude: "108.82737574104192" },
        { latitude: "34.12486186642067", longitude: "108.8276450473436" },
        { latitude: "34.12492710700427", longitude: "108.82776483918803" },
        { latitude: "34.125834131591965", longitude: "108.82831516053102" },
        { latitude: "34.12611708533678", longitude: "108.82811430675747" },
        { latitude: "34.126176733088194", longitude: "108.82791975794225" },
        { latitude: "34.12619760968881", longitude: "108.82771800321893" },
        { latitude: "34.12613796208871", longitude: "108.82749102937419" },
        { latitude: "34.1260127020461", longitude: "108.82740816585476" },
        { latitude: "34.125192542300795", longitude: "108.82695061552079" },
        { latitude: "34.12495991369716", longitude: "108.82713795894347" },
        { latitude: "34.12486783132893", longitude: "108.8276450473436" },
        { latitude: "34.12585761791368", longitude: "108.82831245840305" },
        { latitude: "34.12615287399267", longitude: "108.82807467634598" },
        { latitude: "34.126215503933324", longitude: "108.82765675641838" },
        { latitude: "34.12616480340471", longitude: "108.82752345421807" },
        { latitude: "34.12522833122856", longitude: "108.82696862928049" },
        { latitude: "34.12495394880819", longitude: "108.82709832865567" },
        { latitude: "34.12483465189956", longitude: "108.8274045631482" },
        { latitude: "34.12483465189956", longitude: "108.82765675641838" },
        { latitude: "34.12586060027726", longitude: "108.82829804749429" },
        { latitude: "34.12607533202229", longitude: "108.82815393737542" },
        { latitude: "34.12616778575743", longitude: "108.8280422515536" },
        { latitude: "34.12620357425532", longitude: "108.8278332914997" },
        { latitude: "34.12616480340471", longitude: "108.82753065971372" },
        { latitude: "34.125219384019395", longitude: "108.82694701275227" },
        { latitude: "34.12499570275223", longitude: "108.82706950650811" },
        { latitude: "34.12488870825279", longitude: "108.82720551065586" },
        { latitude: "34.1247779856884", longitude: "108.82712715063815" },
        { latitude: "34.12483643314967", longitude: "108.82694791346648" },
        { latitude: "34.124305105193145", longitude: "108.8266377711002" },
        { latitude: "34.12408701362027", longitude: "108.82706019472027" },
        { latitude: "34.12383478298667", longitude: "108.82769215685835" },
        { latitude: "34.12468209603533", longitude: "108.82826589626916" },
        { latitude: "34.12580609226847", longitude: "108.8289837463858" },
        { latitude: "34.125215641597975", longitude: "108.83031727530192" },
        { latitude: "34.125493005482646", longitude: "108.83050101616243" },
        { latitude: "34.12554668844743", longitude: "108.83074933437479" },
        { latitude: "34.12557949503969", longitude: "108.83086101974266" },
        { latitude: "34.12561789332808", longitude: "108.8308979480264" },
        { latitude: "34.125707365296996", longitude: "108.83085831765607" },
        { latitude: "34.125746136357385", longitude: "108.83083309856568" },
        { latitude: "34.12574911872489", longitude: "108.83089074248949" },
        { latitude: "34.12578528026408", longitude: "108.83094748593771" },
        { latitude: "34.12582666092618", longitude: "108.83096279765209" },
        { latitude: "34.12587475195341", longitude: "108.8310087329188" },
        { latitude: "34.12591016791667", longitude: "108.83103485314473" },
        { latitude: "34.12639592282739", longitude: "108.83133838557683" },
        { latitude: "34.12650291536394", longitude: "108.83142214973657" },
        { latitude: "34.126780274999795", longitude: "108.83161669871174" },
      ]
    }
    // console.log(this.data.RotuneLine[0].points);
    console.log(DetermineRand);
    this.setData({
      ['RotuneLine[0].points']: Routine//这个赋值很妙，不大会
    })
  },
  RandomValue: function () {
    var Distance = (3.0 + Math.random() * 5).toFixed(2);//小于8km
    // var Today=Date()
    var MaxPaceMinute = (6 + Math.random() * 2).toFixed(0);
    var MaxPaceSecond = (Math.random() * 60).toFixed(0);

    var MinPaceMinute = (4 + Math.random() * 2).toFixed(0);
    var MinPaceSecond = (Math.random() * 60).toFixed(0);

    var DurationMinute = (parseFloat(Distance) * 6).toFixed(0);
    var AvgPaceMinute = (parseFloat(DurationMinute) / parseFloat(Distance)).toFixed(0);

    var Calorie = (66 * parseFloat(Distance)).toFixed(0);

    console.log(Distance, MaxPaceMinute, MaxPaceSecond, MinPaceMinute, MinPaceSecond, DurationMinute, AvgPaceMinute, Calorie);
    this.setData({
      Distance: parseFloat(Distance),
      MaxSpeed: MaxPaceMinute.toString() + '\'' + MaxPaceSecond.toString(),
      MinSpeed: MinPaceMinute.toString() + '\'' + MinPaceSecond.toString(),
      WorkOutDuration: "00:" + DurationMinute + ":00",
      Calorie: Calorie,
    })
  }
})