import Logo from '../../assets/logo.svg';
import Icon from '../../components/Icon/Icon';
import { useAuthenticateUser } from '../../services/auth/authenticate';

const Login = () => {
  const { mutateAsync: authenticate } = useAuthenticateUser();

  return (
    <div className='flex justify-center items-center h-screen p-4'>
      <div className='w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 bg-gray-800 border-gray-700'>
        <a href='https://gistspace.org' className='flex items-center'>
          <img src={Logo} className='mr-3 h-6 sm:h-9' alt='GistSpace' />
          <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            GistSpace
          </span>
        </a>

        <div>
          <p className='text-sm font-normal text-gray-400 mt-4'>
            Experimental project to resolve the most requested github feature.
          </p>
          <a
            target='_blank'
            href='https://github.com/users/easyadin/projects/3/views/1?layout=table'
            className='inline-flex items-center text-blue-600 hover:underline text-sm'
          >
            view project
            <Icon name='externalLink' />
          </a>
        </div>

        <ul className='my-4 space-y-3'>
          <li>
            <a
              href='https://github.com/orgs/community/discussions/7923#discussioncomment-5415287'
              target='_blank'
              className='flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-100 group hover:shadow bg-gray-700 hover:bg-gray-600 text-white'
            >
              <Icon name='github' />
              <span className='flex-1 ml-2 whitespace-nowrap'>
                Community request
              </span>
              <span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium bg-neutral-900 rounded text-gray-400'>
                Popular
              </span>
            </a>
          </li>
          <li>
            <button
              onClick={() => authenticate()}
              className='flex items-center p-3 text-sm font-medium rounded-lg group hover:shadow bg-neutral-900 hover:bg-gray-600 text-white w-full'
            >
              <Icon name='github' />

              <span className='flex-1 ml-2 whitespace-nowrap text-left'>
                Try Org. Gist
              </span>
              <span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium bg-gray-700 rounded text-gray-400'>
                Beta
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
