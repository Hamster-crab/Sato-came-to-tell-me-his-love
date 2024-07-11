import './App.css';

function App() {
  return (
    <div>
      <div className="Main">
        <header className="">
        </header>
        <h1>愛を知らせに来た佐藤</h1>
        <div className="ThisGame">
          このゲームの物語
          舞台はとある国の中で起こる一つの小さくも、とても大きい物語。
          主人公はそんな世界に旅立つべく三つの中から相棒を一つ選び、旅に出る。
          パワー型の佐藤、バランス型の佐藤、スピード型の佐藤。
          その三つの中から選び、運命のピースの一つをいれる。旅に出た後主人公は、「自分とは何か」を知るためにその台地に古くから存在する四神を相棒とめぐる。
          極寒の雪山がある北には「パソコンクラッシャーS」、町が最も栄えている東には「コロコロ椅子での爆速ターボT」、のどかな農村部が広がる西では「ブロッコリーのY」、南国の広大なビーチがある南には「中指の使者K」がいて、
          それぞれの地域での異変の正体が四神の異変とつながっているということを知る。主人公は自分の目標と世界に救出を目指すべく、弱肉強食、人間賛歌、相思相愛に気づかされる冒険に繰り出す。
          時に生き物を狩り、時に新しい仲間と出会い、時に回り道をし、時にピンチを切り抜ける。
        </div><br/><br/><br/>
        <div className='CreatorName'>製作者</div>
      </div>

        <div className="Creator">
          <img src="/image/YJSENPAI.jpg" alt="" />
          <a>製作者:田所浩二<br/>年齢  :0.24歳学生<br/>使える言語:日本語、Python、HTML、CSS、一部であるが英語</a>
        </div><br /><br />
        <div className='ElectronicCommerce'>
          <h1>購入者情報</h1>
          <label>Mail</label><br />
          <input type="text" name="mail" id="mail" width={30} height={30} />
          <label>カード番号</label><br />
          <label>有効期限</label><br />
          <select name="Card-date-of-expiry-Year" id="Card-date-of-expiry-Year">
            <option value=""></option>
          </select>
          <select name="Card-date-of-expiry-Date" id="">
            <option value=""></option>
          </select>
          <label>セキュリティーコード</label><br />
          <label>名義人</label><br />
          <label>お支払い回数</label><br />
        </div>
    </div>
  );
}

export default App;
