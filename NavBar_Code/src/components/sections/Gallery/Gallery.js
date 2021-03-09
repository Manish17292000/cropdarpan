import React from 'react';

import Section from '../../../HOC/Section';

const Blog = () => {
  return (
    <Section id='gallery'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Gallery
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            The Crop Darpan tool is built to enable the typical farmer to identify the crop  problem.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                  <h5 className='card-title'>High Quality Support</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Research Financial</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>Business Deal</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
