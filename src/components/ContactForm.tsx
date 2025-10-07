import { useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const BACKEND_URL = 'https://aysedemireldeniz.vercel.app/contact';

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');

  const onFinish = async (values: ContactFormValues) => {
    setLoading(true);
    setLoadingMsg('Submission in progress');
    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Something went wrong please try again');
      }

      message.success('Your message has been sent successfully');
      setLoadingMsg('Submission completed');
      form.resetFields();
    } catch {
      message.error('Something went wrong please try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form">
      <Form<ContactFormValues> form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input placeholder="Your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email address' },
            { type: 'email', message: 'Please enter valid email address' }
          ]}>
          <Input placeholder="Your email address" />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: 'Please write your message' }]}>
          <Input.TextArea placeholder="Your message" rows={4} />
        </Form.Item>

        <Form.Item className="contact-btn">
          <Button
            style={{ background: '#fb923c' }}
            type="primary"
            htmlType="submit"
            block
            disabled={loading}>
            Send
          </Button>
          {loading ? <Spin size="small" /> : loadingMsg}
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
