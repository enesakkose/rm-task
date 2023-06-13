import ToolBar from './ToolBar'
import Modal from '../Modal'
import MainContainer from '@/containers/MainContainer'
import Pagination from './Pagination'
import Content from './Content'
import { useModalContext } from '@/context/ModalContext'
import styles from './Datagrid.module.scss'

function Datagrid() {
  const { open } = useModalContext()
  
  return (
    <MainContainer as='main' className={styles.datagrid}>
      {open && <Modal/>}
      <ToolBar/>
      <Content/>
      <Pagination/>
    </MainContainer>
  )
}

export default Datagrid