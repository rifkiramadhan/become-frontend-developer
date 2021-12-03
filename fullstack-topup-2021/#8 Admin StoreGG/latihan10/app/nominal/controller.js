const Nominal = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')

            const alert = { message: alertMessage, status: alertStatus }
            const nominal = await Nominal.find()

            res.render('admin/nominal/view_nominal', {
                nominal,
                alert
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
       }
    },

    viewCreate: async(req, res) => {
        try {
            res.render('admin/nominal/create')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    actionCreate: async(req, res) => {
        try {
            const { coinName, coinQuantity, price } = req.body
            
            let nominal =  await Nominal({ coinName, coinQuantity, price })
            await nominal.save()

            req.flash('alertMessage', "Berhasil tambah nominal")
            req.flash('alertStatus', "success")

            res.redirect('/nominal');
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },
    
    // viewEdit: async(req, res) => {
    //     try {
    //         const { id } = req.params
    //         const category = await Category.findOne({_id: id})

    //         res.render('admin/category/edit', {
    //             category
    //         })

    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`)
    //         req.flash('alertStatus', 'danger')
    //         res.redirect('/category')
    //     }
    // },

    // actionEdit: async(req, res) => {
    //     try {
    //         const { id } = req.params
    //         const { name } = req.body

    //         await Category.findOneAndUpdate({
    //             _id: id
    //         }, { name });

    //         req.flash('alertMessage', "Berhasil ubah kategori")
    //         req.flash('alertStatus', "success")

    //         res.redirect('/category')

    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`)
    //         req.flash('alertStatus', 'danger')
    //         res.redirect('/category')
    //     }
    // },

    // actionDelete: async(req, res) => {
    //     try {
    //         const { id } = req.params

    //         await Category.findOneAndRemove({
    //             _id: id
    //         });

    //         req.flash('alertMessage', "Berhasil hapus kategori")
    //         req.flash('alertStatus', "success")

    //         res.redirect('/category')

    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`)
    //         req.flash('alertStatus', 'danger')
    //         res.redirect('/category')
    //     }
    // }
}