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
      </div><br /><br />
        <div className='ElectronicCommerce'>
          <h1>購入者情報</h1>
          <label>Mail</label>
          <input type="email" name="mail" id="mail" width={30} height={30} /><br />
          <label>カード番号</label>
          <input type="text" name="card-number" id="card-number" width={30} height={30} /><br />
          <label>有効期限</label>
          <select name="Card-date-of-expiry-Year" id="Card-date-of-expiry-Year">
            <option value=""></option>
            <option value="CardDateOfExpiryYear24">24</option>
            <option value="CardDateOfExpiryYear25">25</option>
            <option value="CardDateOfExpiryYear26">26</option>
            <option value="CardDateOfExpiryYear27">27</option>
            <option value="CardDateOfExpiryYear28">28</option>
            <option value="CardDateOfExpiryYear29">29</option>
            <option value="CardDateOfExpiryYear30">30</option>
            <option value="CardDateOfExpiryYear31">31</option>
            <option value="CardDateOfExpiryYear32">32</option>
            <option value="CardDateOfExpiryYear33">33</option>
            <option value="CardDateOfExpiryYear34">34</option>
            <option value="CardDateOfExpiryYear35">35</option>
            <option value="CardDateOfExpiryYear36">36</option>
            <option value="CardDateOfExpiryYear37">37</option>
            <option value="CardDateOfExpiryYear38">38</option>
            <option value="CardDateOfExpiryYear39">39</option>
            <option value="CardDateOfExpiryYear40">40</option>
            <option value="CardDateOfExpiryYear41">41</option>
            <option value="CardDateOfExpiryYear42">42</option>
            <option value="CardDateOfExpiryYear43">43</option>
            <option value="CardDateOfExpiryYear44">44</option>
            <option value="CardDateOfExpiryYear45">45</option>
            <option value="CardDateOfExpiryYear46">46</option>
            <option value="CardDateOfExpiryYear47">47</option>
            <option value="CardDateOfExpiryYear48">48</option>
            <option value="CardDateOfExpiryYear49">49</option>
            <option value="CardDateOfExpiryYear50">50</option>
            <option value="CardDateOfExpiryYear51">51</option>
            <option value="CardDateOfExpiryYear52">52</option>
            <option value="CardDateOfExpiryYear53">53</option>
            <option value="CardDateOfExpiryYear54">54</option>
            <option value="CardDateOfExpiryYear55">55</option>
            <option value="CardDateOfExpiryYear56">56</option>
            <option value="CardDateOfExpiryYear57">57</option>
            <option value="CardDateOfExpiryYear58">58</option>
            <option value="CardDateOfExpiryYear59">59</option>
            <option value="CardDateOfExpiryYear60">60</option>
          </select>
          <select name="Card-date-of-expiry-Date" id="">
            <option value=""></option>
            <option value="CardDateOfExpiryDate1">1月</option>
            <option value="CardDateOfExpiryDate2">2月</option>
            <option value="CardDateOfExpiryDate3">3月</option>
            <option value="CardDateOfExpiryDate4">4月</option>
            <option value="CardDateOfExpiryDate5">5月</option>
            <option value="CardDateOfExpiryDate6">6月</option>
            <option value="CardDateOfExpiryDate7">7月</option>
            <option value="CardDateOfExpiryDate8">8月</option>
            <option value="CardDateOfExpiryDate9">9月</option>
            <option value="CardDateOfExpiryDate10">10月</option>
            <option value="CardDateOfExpiryDate11">11月</option>
            <option value="CardDateOfExpiryDate12">12月</option>
          </select><br />
          <label>セキュリティーコード</label>
          <input type="password" name="" id="" /><br />
          <label>名義人</label>
          <input type="text" name="" id="" /><br />
          <label>お支払い回数</label>
          <input type="text" name="" id="" /><br />
          <input type="button" value="購入" />
        </div><br /><br /><br />

        <center>
          <div className='CreatorName'>製作者</div>
          <div className="Creator">
            <img src="/image/YJSENPAI.jpg" /><br />
            <a>製作者:田所浩二<br/>年齢  :0.24歳学生<br/>使える言語:日本語、Python、HTML、CSS、一部であるが英語</a>
        </div>
        </center>
    </div>
  );
}

export default App;
