

// import React,{useState} from 'react';

// import { PageContainer,ProForm,  ProFormSelect, ProFormText,WaterMark,ProFormUploadButton } from '@ant-design/pro-components';

// import { Card,Button,Upload   } from 'antd'



// // import Editor from '@/components/Editor'
// import TinymceEditor from '@/components/TinymceEditor'



// import { publish } from '@/utils/rules';

// import {reqEdirorAdd} from '@/services/article';
// import { Form } from 'antd/lib';

// const Index= () => {


//   const [formObj] = ProForm.useForm()

//   const setDetails = content => formObj.setFieldsValue({ 'desc': content })
//     const setImage = content => formObj.setFieldsValue({ 'image': content }) 

//   const [initialValues, setInitialValues] = useState({})

//    const handlerTableAdd= async(values) => {
//     console.log(values);
//      const res=   await reqEdirorAdd(values)
//      if (res.code===200) {
//        console.log(res);
//      }
//    }

//    const handleBeforeUpload = ({file}) => {  
    
//     // console.log('file',file);
//     // if (file.status === 'done') {
//     //   console.log(file.response.data);
//     //   setImage( )
//     // }
           
           
//   };


//   return (
//     <PageContainer >

//      <WaterMark  content={['']}>
    
//      <ProForm
//         form={formObj}
//         onFinish={async (values) => {
//           handlerTableAdd(values)
//         // message.success('提交成功');
//       }}
//       initialValues={{
//         // name: '蚂蚁设计有限公司',
//         // name2: '蚂蚁设计集团',
//         // useMode: 'chapter',
//       }}
//     >
//       <ProFormText
//         width="md"
//         name="name"
//         label="标题"
//         tooltip="最长为 24 位"
//         placeholder="请输入文章标题"
//         // rules={publish.title}
//       />

//       <ProFormSelect
//           // initialValue="money"
//             options={[
//                   {
//                     value: 0,
//                     label: '小说',
//                   },
//                 ]}
//         width="md"
//         name='cateId'
//         label="分类"
//         // rules={publish.classify}
//         tooltip="文章分类是必选项"
//         placeholder="请选择文章分类 "
//         /> 
//      <ProFormUploadButton
//        accept='/*'
//         name="image"
//         label="上传封面"
//         max={1}
//         // rules={publish.cover}
//         action="http://121.4.166.61:8080/api-1.0/data/upload"
//         onChange={handleBeforeUpload}
//       />

 

//        <ProForm.Item
//         width="md"
//         name="desc"
//         label="文章编辑"
//         tooltip="文章编辑是必须的"
//         // rules={publish.editor}
//         >
//           <TinymceEditor
//                 setDetails={setDetails}
//           />
//         </ProForm.Item>
//     </ProForm>
 
//       </WaterMark>

//     </PageContainer>
//   );
// };

// export default Index;
