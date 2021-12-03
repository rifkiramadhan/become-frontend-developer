const Bank = require('./model');

module.exports = {
    index: async(req, res) => {
        try {
            const alertMessage = req.flash('alertMessage')
            const alertStatus = req.flash('alertStatus')

            const alert = { message: alertMessage, status: alertStatus }
            const bank = await Bank.find()

            res.render('admin/bank/view_bank', {
                bank,
                alert
            })
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bank')
       }
    },

    viewCreate: async(req, res) => {
        try {
            res.render('admin/bank/create')
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bank')
        }
    },

    actionCreate: async(req, res) => {
        try {
            const { name, nameBank, noRekening } = req.body
            
            let bank =  await Bank({ name, nameBank, noRekening })
            await bank.save()

            req.flash('alertMessage', "Berhasil tambah bank")
            req.flash('alertStatus', "success")

            res.redirect('/bank');
        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bank')
        }
    },
    
    viewEdit: async(req, res) => {
        try {
            const { id } = req.params
            const bank = await Bank.findOne({_id: id})

            res.render('admin/bank/edit', {
                bank
            })

        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bank')
        }
    },

    actionEdit: async(req, res) => {
        try {
            const { id } = req.params
            const { name, nameBank, noRekening } = req.body

            await Bank.findOneAndUpdate({
                _id: id
            }, { name, nameBank, noRekening });

            req.flash('alertMessage', "Berhasil ubah bank")
            req.flash('alertStatus', "success")

            res.redirect('/bank')

        } catch (err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/bank')
        }
    },

    // actionDelete: async(req, res) => {
    //     try {
    //         const { id } = req.params

    //         await Nominal.findOneAndRemove({
    //             _id: id
    //         });

    //         req.flash('alertMessage', "Berhasil hapus nominal")
    //         req.flash('alertStatus', "success")

    //         res.redirect('/nominal')

    //     } catch (err) {
    //         req.flash('alertMessage', `${err.message}`)
    //         req.flash('alertStatus', 'danger')
    //         res.redirect('/nominal')
    //     }
    // }
}