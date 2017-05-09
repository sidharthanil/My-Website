$(function() {
    $("#portfolio-gallery").elastic_grid({
        'items': [{
                'title': 'Gallery 1',
                'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail': ['assets/images/small/1.jpg', 'assets/images/small/2.jpg', 'assets/images/small/3.jpg', 'assets/images/small/10.jpg', 'assets/images/small/11.jpg'],
                'large': ['assets/images/large/1.jpg', 'assets/images/large/2.jpg', 'assets/images/large/3.jpg', 'assets/images/large/10.jpg', 'assets/images/large/11.jpg'],
                'button_list': [{
                        'title': 'Demo',
                        'url': 'http://porfolio.bonchen.net/'
                    },
                    {
                        'title': 'Download',
                        'url': 'http://porfolio.bonchen.net/'
                    }
                ],
                'tags': ['Portrait']
            },
            {
                'title': 'Spinach winter purslane',
                'description': 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                'thumbnail': ['assets/images/small/15.jpg', 'assets/images/small/8.jpg', 'assets/images/small/9.jpg', 'assets/images/small/10.jpg'],
                'large': ['assets/images/large/15.jpg', 'assets/images/large/8.jpg', 'assets/images/large/9.jpg', 'assets/images/large/10.jpg'],
                'button_list': [{
                        'title': 'Demo',
                        'url': 'http://porfolio.bonchen.net/'
                    },
                    {
                        'title': 'Download',
                        'url': 'http://porfolio.bonchen.net/'
                    }
                ],
                'tags': ['Portrait', 'Landscape']
            }



        ]
    });
});
