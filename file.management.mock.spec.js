const { expect } = require('chai')
const sinon = require('sinon')
const fs = require('fs')
const proxyquire = require('proxyquire')
const fileManagement = require('./file.management')

describe('File Management', () => {
  afterEach(() => {
    sinon.restore()
  })

  it('Should call writeFileSync when creating a file', () => {
    const writeMock = sinon.mock(fs)
    writeMock.expects('writeFileSync').once()

    const fileManagement = proxyquire('./file.management', { fs })
    fileManagement.createFile('test.txt')

    writeMock.verify()
  })
})
