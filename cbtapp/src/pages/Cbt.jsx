import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function getName(id) {
    var name = "이름없음";

    switch (id) {
        case "6": name = "정보처리기사"; break;
        case "7": name = "정보처리산업기사"; break;
        case "8": name = "정보처리기능사"; break;
        case "9": name = "컴퓨터활용능력1급"; break;
        case "10": name = "컴퓨터활용능력2급"; break;
    }
    return name;
}

var json1 = [
    { 
      "seq": 0,
      "subject": 1,
      "question": "운영체제 분석을 위해 리눅스에서 버전을 확인하고자 할 때 사용되는 명령어는?",
      "answers": [
        { 
          "isAnswer": "n",
          "example": "ls" 
        },
        { 
          "isAnswer": "n",
          "example": "npm" 
        },
        { 
          "isAnswer": "n",
          "example": "pwd" 
        },
        { 
          "isAnswer": "y",
          "example": "uname" 
        }
      ]
    },
    { 
      "seq": 1,
      "subject": 1,
      "question": "통신을 위한 프로그램을 생성하여 포트를 할당하고, 클라이언트의 통신 요청 시 클라이언트와 연결하는 내·외부 송·수신 연계기술은?",
      "answers": [
        { 
          "isAnswer": "n",
          "example": "DB링크 기술" 
        },
        { 
          "isAnswer": "y",
          "example": "소켓 기술" 
        },
        { 
          "isAnswer": "n",
          "example": "스크럼 기술" 
        },
        { 
          "isAnswer": "n",
          "example": "프로토타입 기술" 
        }
      ]
    }
  ]

export default function Cbt(props) {
    const [text, setText] = React.useState('');
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    console.log('dd');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.json')
        .then(res => res.json())
        .then(res => {
            console.log('log: ', res[0].question);
            setText(res);
        });
      }, []);

    return (
        <div style={{ width: '600px',  }}>
            <div>{getName(id)}</div>
            {text != '' ?
                text.map((item) => {
                    return (
                        <div style={{ margin: '20px 0px 20px 0px' }}>
                            {item.question}
                            {item.answers.map((answer, i) => {
                                return (
                                    <div style={{ margin: '5px 0px 0px 0px' }}>{i + 1}. {answer.example}</div>
                                );
                            })}
                        </div>
                    );
                 })
            : <div>Waiting</div>
            }
        </div>
    );
}