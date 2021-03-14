const { expect } = require('chai')
const sinon = require('sinon')
const fs = require('fs')
const proxyquire = require('proxyquire')

describe('File Management', () => {
  afterEach(() => {
    sinon.restore()
  })

  it('Should create a new file', () => {
    const writeFake = sinon.fake(fs.writeFileSync)
    sinon.replace(fs, 'writeFileSync', writeFake)

    const fileManagement = proxyquire('./file.management', { fs })

    fileManagement.createFile('test.txt')
    expect(writeFake.calledWith('./data/test.txt')).to.be.true
  })
})
