import imgDice from './assets/imgs/icon-dice.svg';

function App() {
  //from: https://www.youtube.com/watch?v=9Wo_rj2dhkw
  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    //console.log(data);

    document.getElementById('title').innerHTML = `Advice #${data.slip.id}`;
    document.getElementById('text').innerHTML = `"${data.slip.advice}"`;
  };

  fetchAdvice(); //call function at load

  return (
    <main className='App'>
      <h1 className='main--title' id='title'></h1>
      <p className='main--advice' id='text'></p>
      <div className='main--divider'></div>
      <button className='main--btn' onClick={fetchAdvice}>
        <img src={imgDice} />
      </button>
    </main>
  );
}

export default App;
