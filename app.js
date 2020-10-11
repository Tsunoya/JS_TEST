const quiz =[
	{
		question:'一番売れたゲーム機',
		answers:[
		'SFC',
		'PS2',
		'NSW',
		'NDS'
		],
		correct :'NDS'
	},
	{
		question:'FF7の主人公は',
		answers:[
		'フリオ',
		'クラウド',
		'ティーダ',
		'セシル'
		],
		correct:'クラウド'
	}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score =0;

//問題
//const question = '一番売れたゲーム機';

//答え一覧
//const answers = [
//	'SFC',
//	'PS2',
//	'NSW',
//	'NDS'
//];

//正解
//const correct ='NDS';

//buttonの定義付け
const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;

//questionのテキストをHTMLに反映させる
//document.getElementById('js-question').textContent = question;

//各ボタンはanswersの何番目か（例）
//$button[0].textContent = answers[0];
//$button[1].textContent = answers[1];
//$button[2].textContent = answers[2];
//$button[3].textContent = answers[3];

//上の文の別記載　whileで繰り返し
//let buttonIndex = 0;
//let buttonLength = $button.length;　//button.length=そのページのボタンの数
//while(buttonIndex < buttonLength){
//	$button[buttonIndex].textContent = answers[buttonIndex];
//	buttonIndex++;
//}

//16行～30行までをまとめるとクイズの問題文と選択肢を定義できる
const setupquiz = () => {
	document.getElementById('js-question').textContent = quiz[quizIndex].question;
	let buttonIndex = 0;
//	let buttonLength = $button.length; //button.length=そのページのボタンの数
	while(buttonIndex < buttonLength){
		$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
		buttonIndex++;
	}
}
setupquiz(); //定義を読み込む


//ボタンクリックしたときの動作
//button[0].addEventListener('click',() =>{
//	if(correct === $button[0].textContent){
//		window.alert('正解');
//	} else {
//		window.alert('不正解');
//	}
//});

//46行からの文を違う形で
//$button[0].addEventListener('click',(e) =>{ //e＝イベント,クリックイベント
//	if(correct === e.target.textContent){
//		window.alert('正解');
//	} else {
//		window.alert('不正解');
//	}
//});

const clickHandler = (e) => {
	if(quiz[quizIndex].correct === e.target.textContent){
		window.alert('正解');
		score++;
	} else {
		window.alert('不正解');
	}
	quizIndex++;

	if(quizIndex < quizLength){
		setupquiz();
	} else {
		window.alert('おわり!正解数は' + score + '/' + quizLength + 'です');
	}
};
//ボタン押したら正誤判定
let handlerIndex = 0;
//const buttonLength = $button.length
while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener('click',(e) =>{
		clickHandler(e);
	});
	handlerIndex++;
};

//$button[0].addEventListener('click',(e) =>{
//	clickHandler(e);
//});
