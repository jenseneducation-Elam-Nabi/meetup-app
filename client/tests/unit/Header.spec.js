import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Header from '../../src/components/Header.vue'

describe('Header', () => {

    test('Should check if the path is correct on router link', () => {

        const wrapper = shallowMount(Header, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.find(RouterLinkStub).props().to).toBe('/meetup/meetupslogin')
    })

});