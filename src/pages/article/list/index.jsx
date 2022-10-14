import React, { useRef, useState } from 'react';

import { PageContainer, WaterMark,  ProTable } from '@ant-design/pro-components';

import {Button,Image,message,Popconfirm} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

import Editor from './components/Editor'


import {reqTableList ,reqDelete} from '@/services/article';

const size = 'small'

const valueEnum = {
  0: '小说',
};

const Index = () => {

  const actionRef = useRef()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editRow, setEditRow] = useState(null)

  const isShowModal = (show, row = null) => {
   console.log(row);
    if (row?.id!==null) {
     setEditRow(row)
    }   
    setIsModalVisible(show)
  }

  const handleTableList = async (params) => {
    let values={...params,pageNum:params.current,pageSize:params.pageSize}
    delete values.current
    const res = await reqTableList(values)
    if (res.code === 200) {
        return {
            data: res.data,
            success: true,
            total: res.totalSize
        }
    }
}
const handleConfirm=async(id) => {
  const res =await reqDelete({id})
    if (res.code===200) {
        message.success('删除成功！')
         actionRef.current.reload()
    }else{
        message.error('删除失败！')
    }
}






  const columns = [
    {
        width: 50,
        fixed: 'left',
        title: '序号',
        dataIndex: 'index',
        valueType: 'indexBorder',


    },
    {
        width: 80,
        fixed: 'left',
        title: '封面图',
        dataIndex: 'image',
        hideInSearch: true,
        render:(_,row)=>{
          <Image src={row.image[0]}/>
        }

    },
    {
        width: 100,
        fixed: 'left',
        title: '分类',
        valueType: 'select',
        dataIndex: 'cateId',
        // hideInSearch: true, 
        valueEnum
        
    },
    {
        width: 100,
        fixed: 'left',
        title: '标题',
        dataIndex: 'name',
        ellipsis: true,
        copyable: true,
        // hideInSearch: true,

    },  

    {
        width: 60,
        align: 'center',
        fixed: 'right',
        title: '操作',
        hideInSearch: true,
        render: (_, row) => [
                <Button key={'add'} type='link' onClick={()=>isShowModal(true, row)} >编辑</Button>,
    <Popconfirm
    key={'Popconfirm'}
    title="当前操作不可撤销是否删除？"
    onConfirm={()=>handleConfirm(row.id)}
    // onCancel={cancel}    
    okText="Yes"
    cancelText="No"
  >
  <Button key={'delet'} type='text' danger>删除</Button>
  </Popconfirm>
              

        ]

    },
]




    return (
        <>
            <PageContainer >
      <WaterMark  content={['']}>
      <ProTable
                scroll={{ x: 1300 }}
                defaultSize={size}
                columns={columns}
                actionRef={actionRef}
                request={async (params, sort, filter) => handleTableList(params)}
                rowKey="id"
                search={{
                    labelWidth: 'auto',
                }}
                pagination={{
                    // pageSize: 10,    
                }}
                dateFormatter="string"
                // headerTitle="工人进场列表"
                toolBarRender={() => [
                    <Button key="button" icon={<PlusOutlined/>}  shape="round" onClick={() => isShowModal(true)}>
                       添加内容
                    </Button>,
                ]}
            />

         
      </WaterMark>

 
 
    </PageContainer>
         {
         isModalVisible?<Editor 
          isModalVisible={isModalVisible}
          isShowModal={isShowModal}
          actionRef={actionRef}
          editRow={editRow}
            />:null
           }
        </>
 
    
    );
}

export default Index;
