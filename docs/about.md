## 动画库
  #### 数字滚动效果
    .container .num-box {
      display: inline block;
      width: 50px;
      height: 50px;
      text-align: center;
      writing-mode: vertical-lr;
      text-orientation: upright;
      overflow: hidden;
      font-size: 50px;
      line-height: 50px;
      .container .num-box > span {
        display: inline block;
        width: 100%;
        height: 1000%;
        transition: transform ls ease-in-out;
      }
    }
    const creatNum = function (el, runNum) {
      let computeNumber = runNum.tostring().split ('')
      let childrenEl = document.getElementsByClassName(el)[0]
      if(!childrenEl.children.length) {
        for (let i = 0; i < computeNumber.length; i++) {
          // 创建span节点
          var spanParent = document.createElement('span')
          var spanSon = document.createElement('span')
          // 创建文本节点
          var node = document.createTextNode('0123456789')spanSon.appendchild(node)
          spanParent.append(spanSon)
          spanParent.className = "num-box"
          document.getElementsBylassName(el)[0].append(spanParent)
        }
      }

      function setTransform() {
        let boxParent = document.getElementsByClassName(el)[0]
        let boxsItem = boxParent.getElementsByClassName('num-box')
        let spans = []
        for(let i = 0; i < boxsItem,length; i++) {
          spans.push(boxsItem[i].getElementsByTagName ('span')[0])
        }
        for(let i = 0; i < spans.length; i++) {
          let el = spans[i]
          el.style.transform = `translate(0%, -${computeNumber[i] * 10}%)`
        }
      }
    }
  