import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = shallowMount(App);
  })

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('should be able to add two numbers', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('should be able to subract a number', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should be able to multiply two numbers', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('should be able to divide two numbers', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should concatenate multiple number button clicks', () => {
    wrapper.vm.numberClick('5');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(55)
  })

  it('should chain multiple operations together', () => {
    wrapper.vm.runningTotal = 0;
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(2)
  })

  it('should clear the running total without affecting the calculation', () => {
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('5');
    wrapper.vm.clearClick();
    expect(wrapper.vm.previousTotal).to.equal(5);
    expect(wrapper.vm.previousOperator).to.equal('+');
    expect(wrapper.vm.runningTotal).to.equal(0);
  })
  

})
