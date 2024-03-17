import { FlatList, Text, View } from 'react-native'
import { Input } from '@/components/Input'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { EMAILS } from '@/utils/emails'

export default function Home() {
    return (
        <View className='flex-1 bg-black pt-14 p-4'>
            <Input>
                <MenuButton />
                <Input.Field placeholder='Pesquisar' />
                <Avatar size='small' source={{uri: 'https://github.com/angelog.png'}} />
            </Input>

            <FlatList
                data={EMAILS}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Email data={item} />}
                contentContainerClassName='gap-6'
                ListHeaderComponent={() => <Text className='uppercase text-gray-300 text-sm
                font-subtitle mt-6'>Entrada</Text>}
            />
        </View>
    )
}