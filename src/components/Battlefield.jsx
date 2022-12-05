import React, { useState, useMemo } from 'react';
import Weapon from './Weapon';

function Battlefield({getScore}) {

  const [playerWeaponProps, setPlayerWeaponProps] = useState([
    {
      order: "order-1",
      position: "right-20",
      borderColor: "border-blue",
      imgSrc: "/images/icon-paper.svg",
      altDescription: "paper",
      visibility: "visible"
    },
    {
      order: "order-2",
      position: "left-20",
      borderColor: "border-yellow",
      imgSrc: "/images/icon-scissors.svg",
      altDescription: "scissors",
      visibility: "visible"
    },
    {
      order: "order-3",
      position: "right-20",
      borderColor: "border-red",
      imgSrc: "/images/icon-rock.svg",
      altDescription: "rock",
      visibility: "visible"
    }
  ])
  const [enemyWeaponProp, setEnemyWeaponProp] = useState(
    {
      order: "order-2",
      position: "left-40",
      borderColor: "",
      imgSrc: "",
      altDescription: "",
      visibility: "invisible"
    })

  const [textVisibility, setResetVisibility] = useState("invisible");
  const [result, setResult] = useState({
    outcome: "",
    playerScore: 0,
    enemyScore: 0
  })
  let enemyWeapon = "";
  let playerWeapon = "";
  getScore(result.playerScore,result.enemyScore)

  function getResult(playerWeapon, enemyWeapon) {

    if (playerWeapon === "paper" && enemyWeapon === "rock") {
      setResult((prev) => {
        return {
          ...prev,
          playerScore: result.playerScore + 1,
          outcome: "You Win",
        }
      })
    }
    else if (playerWeapon === "rock" && enemyWeapon === "scissors") {
      setResult((prev) => {
        return {
          ...prev,
          playerScore: result.playerScore + 1,
          outcome: "You Win",
        }
      })
    }
    else if (playerWeapon === "scissors" && enemyWeapon === "paper") {
      setResult((prev) => {
        return {
          ...prev,
          playerScore: result.playerScore + 1,
          outcome: "You Win",
        }
      })
    }
    else if (playerWeapon === enemyWeapon) {
      setResult((prev) => {
        return {
          ...prev,
          outcome: "Draw",
        }
      })
    }
    else {
      setResult((prev) => {
        return {
          ...prev,
          enemyScore: result.enemyScore + 1,
          outcome: "Enemy Wins",
        }
      })
    }
  }

  function handleOrder(event) {
    const { value } = event.target;
    playerWeapon = value;

    setResetVisibility("visible")
    setPlayerWeaponProps(() => {

      if (value === "paper") {
        return [
          {
            order: "order-2",
            position: "right-40",
            borderColor: "border-blue",
            imgSrc: "/images/icon-paper.svg",
            altDescription: "paper",
            visibility: "visible"
          },
          {
            order: "order-3",
            position: "right-40",
            borderColor: "border-yellow",
            imgSrc: "/images/icon-scissors.svg",
            altDescription: "scissors",
            visibility: "invisible"
          },
          {
            order: "order-1",
            position: "right-40",
            borderColor: "border-red",
            imgSrc: "/images/icon-rock.svg",
            altDescription: "rock",
            visibility: "invisible"
          }
        ]
      }
      else if (value === "rock") {
        return [
          {
            order: "order-3",
            position: "right-40",
            borderColor: "border-blue",
            imgSrc: "/images/icon-paper.svg",
            altDescription: "paper",
            visibility: "invisible"
          },
          {
            order: "order-1",
            position: "right-40",
            borderColor: "border-yellow",
            imgSrc: "/images/icon-scissors.svg",
            altDescription: "scissors",
            visibility: "invisible"
          },
          {
            order: "order-2",
            position: "right-40",
            borderColor: "border-red",
            imgSrc: "/images/icon-rock.svg",
            altDescription: "rock",
            visibility: "visible"
          }
        ]
      }
      else {
        return [
          {
            order: "order-1",
            position: "right-40",
            borderColor: "border-blue",
            imgSrc: "/images/icon-paper.svg",
            altDescription: "paper",
            visibility: "invisible"
          },
          {
            order: "order-2",
            position: "right-40",
            borderColor: "border-yellow",
            imgSrc: "/images/icon-scissors.svg",
            altDescription: "scissors",
            visibility: "visible"
          },
          {
            order: "order-3",
            position: "right-40",
            borderColor: "border-red",
            imgSrc: "/images/icon-rock.svg",
            altDescription: "rock",
            visibility: "invisible"
          }
        ]
      }
    })
    setEnemyWeaponProp(() => {
      const randomWeapon = Math.floor(Math.random() * 3)
      enemyWeapon = playerWeaponProps[randomWeapon].altDescription;

      getResult(playerWeapon, enemyWeapon);
      return {
        ...playerWeaponProps[randomWeapon],
        order: "order-2",
        position: "left-40",
        visibility: "visible"
      };
    })
  }



  function handleReset() {
    setResetVisibility("invisible");
    setEnemyWeaponProp({
      order: "order-2",
      position: "left-40",
      borderColor: "",
      imgSrc: "",
      altDescription: "",
      visibility: "invisible"
    })
    setPlayerWeaponProps([
      {
        order: "order-1",
        position: "right-20",
        borderColor: "border-blue",
        imgSrc: "/images/icon-paper.svg",
        altDescription: "paper",
        visibility: "visible"
      },
      {
        order: "order-2",
        position: "left-20",
        borderColor: "border-yellow",
        imgSrc: "/images/icon-scissors.svg",
        altDescription: "scissors",
        visibility: "visible"
      },
      {
        order: "order-3",
        position: "right-20",
        borderColor: "border-red",
        imgSrc: "/images/icon-rock.svg",
        altDescription: "rock",
        visibility: "visible"
      }
    ])
  }

  return (
    <div className='flex flex-col relative mt-20'>
      {
        playerWeaponProps.map((weaponProp, weaponPropIndex) => {

          if (weaponProp.order === "order-2") {
            return <div className={`flex ${weaponProp.order}`} key={weaponPropIndex}>
              <button type='button' value={weaponProp.altDescription} onClick={handleOrder} className={`relative w-36 h-36 inline-flex items-center justify-center bg-white rounded-full border-8 ${weaponProp.visibility} ${weaponProp.position} ${weaponProp.borderColor}`}>
                <Weapon altDescription={weaponProp.altDescription} imgSrc={weaponProp.imgSrc} />
              </button>
              <h1 className={`text-white font-bold text-5xl ${textVisibility}`} >{result.outcome}</h1>
              <button type='button' key="4" value={enemyWeaponProp.altDescription} className={`relative w-36 h-36 inline-flex items-center justify-center bg-white rounded-full border-8 ${enemyWeaponProp.visibility} order-2 ${enemyWeaponProp.position} ${enemyWeaponProp.borderColor}`}>
                <Weapon altDescription={enemyWeaponProp.altDescription} imgSrc={enemyWeaponProp.imgSrc} />
              </button>
            </div>
          }
          return <div className={`flex ${weaponProp.order}`} key={weaponPropIndex} >
            <button type='button' value={weaponProp.altDescription} onClick={handleOrder} className={`relative w-36 h-36 inline-flex items-center justify-center bg-white rounded-full border-8 ${weaponProp.visibility} ${weaponProp.position} ${weaponProp.borderColor}`}>
              <Weapon altDescription={weaponProp.altDescription} imgSrc={weaponProp.imgSrc} />
            </button>
          </div>
        })
      }
      <button type='button' onClick={handleReset} className={`text-white ${textVisibility}`}>TRY AGAIN</button>
    </div>
  )
}

export default Battlefield