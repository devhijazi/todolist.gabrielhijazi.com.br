import Text from './components/text';

import TrashIcon from './assets/icons/Trash-Regular.svg?react';
import SpinIcon from './assets/icons/spinner.svg?react';
import PlusIcon from './assets/icons/Plus-Regular.svg?react';
import Icon from './components/icon';
import Badge from './components/badge';
import Button from './components/button';

export default function App() {
  return (
    <div>
      <div>
        <Text as="h1" variant="body-md" className="text-green-base">
          Teste
        </Text>
        <Text as="span" variant="body-md-bold" className="text-pink-base">
          Teste
        </Text>
        <Text as="p" variant="body-sm-bold" className="text-gray-400">
          Teste
        </Text>
      </div>
      <div>
        <Icon svg={TrashIcon} />
        <Icon svg={SpinIcon} width="100px" animate />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Fala comigo bb</Button>
      </div>
    </div>
  );
}
