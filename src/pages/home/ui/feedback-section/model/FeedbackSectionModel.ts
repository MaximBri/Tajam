import { ChangeEvent, useState } from 'react';
import { errorInterface } from '../FeedbackSection';

export const feedbackSectionModel = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tel, setTel] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<errorInterface>({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: '',
  });

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.replace(/\d+/g, '').slice(0, 20));
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.slice(0, 40));
  };

  const onChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value.slice(0, 30));
  };

  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value.slice(0, 2000));
  };

  const onChangeTel = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    if (!value.startsWith('7') && !value.startsWith('8')) {
      value = '7' + value;
    }
    let formattedValue = '+7';
    if (value.length > 1) {
      formattedValue += ` (${value.slice(1, 4)}`;
    }
    if (value.length > 4) {
      formattedValue += `) ${value.slice(4, 7)}`;
    }
    if (value.length > 7) {
      formattedValue += `-${value.slice(7, 9)}`;
    }
    if (value.length > 9) {
      formattedValue += `-${value.slice(9, 11)}`;
    }
    setTel(formattedValue);
    console.log(tel.length);
  };

  const checkValidEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const sendForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!name) {
      setError({ name: 'Введите имя' });
    } else if (!checkValidEmail(email)) {
      setError({ email: 'Некорректная почта' });
    } else if (tel.length !== 18) {
      setError({ tel: 'Некорректный номер телефона' });
    } else if (!subject) setError({ subject: 'Напишите тему' });
    else if (!message) setError({ message: 'Напишите сообщение' });
    else {
      setError({});
      setName('');
      setEmail('');
      setTel('');
      setSubject('');
      setMessage('');
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    tel,
    setTel,
    subject,
    setSubject,
    message,
    setMessage,
    error,
    setError,
    onChangeName,
    onChangeEmail,
    onChangeSubject,
    onChangeMessage,
    onChangeTel,
    sendForm,
  };
};
