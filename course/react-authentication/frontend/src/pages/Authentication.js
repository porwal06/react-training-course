import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { setAuthToken } from '../util/auth';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }


  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: "Unsupported action" }, { status: 422 });
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData)
  }
  );

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Can't fetch data" }, { status: 500 });
  }
  const resData = await response.json();
  const token = resData.token;
  
  setAuthToken(token);

  return redirect('/');
}