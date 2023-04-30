describe('HuntingPony checkout process', () => {
    it('should complete checkout process successfully', () => {
      // Open the homepage
      cy.visit('https://huntingpony.com/')
  
      // Find and click on a random product card
      cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1')
      .click()
      
      cy.wait(2000)

      cy.get('.add-cart-counter__btn').click()

      cy.get('.add-cart-counter__detail').click()

      cy.wait(2000)

      cy.get('.is-count-up').click()

      cy.get('.cart-controls > .button').click()

      cy.contains('Оформление заказа')

      cy.get('#client_surname').type('Ефимов')

      cy.get('#client_contact_name').type('Ефим')

      cy.get('#client_phone').type('1234567890')

      cy.get('#client_email').type('email@email.ru')

      cy.get('#shipping_address_street').type('Клубничная')

      cy.get('#shipping_address_house').type('29')

      cy.get('#shipping_address_flat').type('105')

      cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field')
      .select('Мальчик')

      cy.get('#create_order').click()

      cy.get('.co-notice--success').should('contain.text', 'Заказ успешно оформлен. В течение нескольких секунд вы будете перенаправлены на страницу оплаты.')
      .pause();
    })
  })
  