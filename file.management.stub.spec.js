const { expect } = require('chai')
const sinon = require('sinon')
const fs = require('fs')
const proxyquire = require('proxyquire')

describe('File Management', () => {
  afterEach(() => {
    sinon.restore()
  })

  it('should write a new file', () => {
    const writeStub = sinon.stub(fs, 'writeFileSync')
    const fileManagement = proxyquire('./file.management', { fs })

    fileManagement.createFile('test.txt')

    expect(writeStub.callCount).to.equal(1)
  })
})
