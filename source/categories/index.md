---
title: 分类
date: 2014-04-18 12:39:04
type: categories
---

<div class="widget category">
  <h3 class="title"><%= __('categories') %></h3>
  <ul class="entry">
  <% site.categories.sort('name').each(function(item){ %>
    <li><a href="<%- config.root %><%- item.path %>"><%= item.name %></a><small><%= item.posts.length %></small></li>
  <% }); %>
  </ul>
</div>
