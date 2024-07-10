import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button 
        onClick={()=>{
          let copy = [...글제목];
          글제목변경(copy.sort());
      }}>가나다순 정렬</button>

      <button 
        onClick={()=>{
          // 글제목[0] = '여자 코트 추천';
          // 글제목변경(글제목); -> array나 obj는 초기화값을 보존하자
          let copy = [...글제목];
          copy[0] = '여자 코트 추천'
          글제목변경(copy);
      }}>버튼</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>7월 7일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>7월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>7월 9일 발행</p>
      </div>

      <Modal />

    </div>
  ); //end return
}

function Modal() { // function 변수명이 대문자? => 컴포넌트
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
