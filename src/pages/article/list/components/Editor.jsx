import React, { useEffect, useState } from 'react';
import ProForm, { ProFormText, ProFormSelect, ProFormUploadButton } from '@ant-design/pro-form';
import { message, Modal, Skeleton, Cascader, Button, Image } from 'antd';

import TinymceEditor from '@/components/TinymceEditor';

import { publish } from '@/utils/rules';

import { reqEditorAdd, reqEditorUpdata } from '@/services/article';

const CreateOrEdit = ({ isModalVisible, isShowModal, actionRef, editRow }) => {
  const type = editRow === null ? '添加' : '编辑';

  const [formObj] = ProForm.useForm();

  const setDetails = (content) => formObj.setFieldsValue({ desc: content });
  const setImage = (content) => formObj.setFieldsValue({ image: content });

  const [initialValues, setInitialValues] = useState(null);

  const [initialValuesDoc, setInitialValuesDosc] = useState('');

  const [fileList, setFileLiset] = useState([
    {
      url: '',
    },
  ]);

  const handleSubmit = async (values) => {
    let response = {};
    if (editRow === null) {
      response = await reqEditorAdd({ ...values });
    } else {
      response = await reqEditorUpdata({ ...values, id: editRow.id });
    }

    if (response?.code == 200) {
      message.success(`${type}成功`);
      actionRef.current.reload();
      isShowModal(false);
    } else {
      message.error(`${type}失败`);
    }
  };

  useEffect(() => {
    if (editRow !== null) {
      console.log('editId', editRow);
      const { name, cateId, desc, image } = editRow;
      setInitialValues({
        name,
        cateId,
        image,
      });
      //  setFileLiset({url:image})
      setInitialValuesDosc(desc);
    }
  }, [editRow]);

  return (
    <Modal
      title={`${type}文章`}
      visible={isModalVisible}
      onCancel={() => isShowModal(false)}
      footer={null}
      destroyOnClose={true}
      width={1200}
    >
      {initialValues === null && editRow !== null ? (
        <Skeleton active={true} paragraph={{ rows: 8 }} />
      ) : (
        <ProForm
          form={formObj}
          initialValues={initialValues}
          onFinish={async (values) => {
            handleSubmit(values);
          }}
        >
          <ProFormText
            width="md"
            name="name"
            label="标题"
            tooltip="最长为 24 位"
            placeholder="请输入文章标题"
            rules={publish.title}
          />

          <ProFormSelect
            // initialValue="money"
            options={[
              {
                value: 0,
                label: '小说',
              },
            ]}
            width="md"
            name="cateId"
            label="分类"
            rules={publish.classify}
            tooltip="文章分类是必选项"
            placeholder="请选择文章分类 "
          />

          <ProFormUploadButton
            name="image"
            label="上传封面"
            max={1}
            fieldProps={{
              name: 'file',
              listType: 'picture-card',
            }}
            // rules={publish.cover}
            // fileList={fileList.url||[]}
            // onChange={handleOnChange}
            action={`${BASE_URL}` + '/data/upload'}
            // extra="longgggggggggggggggggggggggggggggggggg"
          />

          <ProForm.Item
            width="md"
            name="desc"
            label="文章编辑"
            tooltip="文章编辑是必须的"
            rules={publish.editor}
          >
            <TinymceEditor initialValuesDoc={initialValuesDoc} setDetails={setDetails} />
          </ProForm.Item>
        </ProForm>
      )}
    </Modal>
  );
};

export default CreateOrEdit;
