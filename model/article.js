import post from './postModel'

export const getBody = (id) =>
    post.findById(id, '-bodySource -summary -break -type').exec()

export const getSource = (id) =>
    post.findById(id).exec()

export const remove = id =>
    post.findOneAndRemove({ _id: id }).exec()
