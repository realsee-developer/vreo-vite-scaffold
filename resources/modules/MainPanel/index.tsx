import { observer } from 'mobx-react'
import classNames from 'classnames'
import { useVreoAction } from '@realsee/vreo/lib/react'
import { vreoUnitA } from '../../data/vreo-units/vreo-unit-a'

import { MainPanelStore } from '../../stores/MainPanelStore'

import './index.css'
import { useStoresContext } from '../../stores'

const PanelView = observer(({ store }: { store: MainPanelStore }) => {
  const { load, show } = useVreoAction()
  return (
    <div
      className={classNames('main-panel-wrapper', {
        'main-panel-wrapper--visible': store.visible,
      })}
    >
      <div className="main-panel">
        <div className="main-panel-content">
          <div className="main-panel-left">
            <div className="user-avatar">
              <img
                className="user-avatar-img"
                src="//vrlab-static.ljcdn.com/release/web/ai-designer-avatar.c6b132b4.png"
              />
            </div>
            <div className="user-info">
              <div className="user-info-pos">如视设计师</div>
              <div className="user-info-txt">更懂你的空间设计师</div>
            </div>
          </div>
          <div className="main-panel-right">
            {/* 开启讲解 */}
            <div
              className="main-panel-btn main-panel-btn--vreo"
              onClick={() => {
                store.setVisible(false)
                setTimeout(() => {
                  show()
                  load(vreoUnitA)
                }, 500)
              }}
            >
              <i className="panel-icon panel-icon--play"></i>
              <span>AI 讲解</span>
            </div>

            {/* 补充其他按钮 */}
            <div
              className="main-panel-btn main-panel-btn--design"
              onClick={() => {
                // 点击回调
              }}
            >
              <i className="panel-icon panel-icon--design"></i>
              <span>我要设计</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export function MainPanel() {
  const stores = useStoresContext()
  return <PanelView store={stores.mainPanelStore} />
}
