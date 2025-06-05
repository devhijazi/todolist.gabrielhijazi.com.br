import Text from './components/text';

import TrashIcon from './assets/icons/trash-regular-icon.svg?react';
import SpinIcon from './assets/icons/spinner-icon.svg?react';
import PlusIcon from './assets/icons/plus-regular-icon.svg?react';
import PencilIcon from './assets/icons/pencil-simple-regular-icon.svg?react';
import SquareDuotoneIcon from './assets/icons/square-duotone-icon.svg?react';
import ClipBoardIcon from './assets/icons/clipboard-text-icon.svg?react';
import XIcon from './assets/icons/x-icon.svg?react';
import Icon from './components/icon';
import Badge from './components/badge';
import Button from './components/button';
import ButtonIcon from './components/button-icon';
import InputText from './components/input-text';
import InputCheckbox from './components/input-checkbox';
import Card from './components/card';
import Container from './components/container';
import Skeleton from './components/skeleton';

export default function App() {
  return (
    <Container>
      <div className="flex gap-10 p-4">
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

      <div className="flex gap-10 p-4">
        <Icon svg={TrashIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SquareDuotoneIcon} />
        <Icon svg={XIcon} />
        <Icon svg={ClipBoardIcon} />
        <Icon svg={SpinIcon} width="30px" animate />
      </div>

      <div className="flex gap-10 p-4 ">
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>

        <Badge loading>10</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Teste de Botão</Button>
      </div>

      <div className="flex gap-10 p-4">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={PlusIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon loading icon={TrashIcon} />
      </div>

      <div className="flex gap-10 p-4">
        <InputText />
      </div>

      <div className="flex gap-10 p-4">
        <InputCheckbox />

        <InputCheckbox loading />
      </div>

      <div className="flex gap-10 p-4">
        <Card size="md">Aoba</Card>
      </div>

      <div className="flex gap-10 p-4">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="w-96 h-6" />
      </div>
    </Container>
  );
}
